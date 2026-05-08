param(
  [Parameter(Mandatory = $true)]
  [string]$RepoName,

  [string]$RepoPath,

  [switch]$SyncAddon,

  [switch]$Force
)

$ErrorActionPreference = "Stop"

function Resolve-TemplateRoot {
  return (Split-Path -Parent $PSScriptRoot)
}

function Resolve-TargetRepo {
  param(
    [string]$Name,
    [string]$ExplicitPath,
    [string]$TemplateRoot
  )

  if ($ExplicitPath) {
    return [System.IO.Path]::GetFullPath($ExplicitPath)
  }

  $reposRoot = Split-Path -Parent $TemplateRoot
  return Join-Path $reposRoot $Name
}

function Ensure-ParentDirectory {
  param([string]$FilePath)

  $parent = Split-Path -Parent $FilePath
  if (-not [string]::IsNullOrWhiteSpace($parent) -and -not (Test-Path $parent)) {
    New-Item -ItemType Directory -Path $parent -Force | Out-Null
  }
}

function Copy-SharedFile {
  param(
    [string]$Source,
    [string]$Destination
  )

  if (-not (Test-Path $Source)) {
    throw "Ficheiro partilhado nao encontrado: $Source"
  }

  Ensure-ParentDirectory -FilePath $Destination
  Copy-Item -Path $Source -Destination $Destination -Force
  Write-Host "OK: synced $Destination"
}

$templateRoot = Resolve-TemplateRoot
$templatesDir = Join-Path $templateRoot "templates"
$repo = Resolve-TargetRepo -Name $RepoName -ExplicitPath $RepoPath -TemplateRoot $templateRoot

if (-not (Test-Path $repo)) {
  throw "Repositorio nao encontrado: $repo"
}

$sharedFiles = @(
  @{ Source = Join-Path $templatesDir ".editorconfig"; Destination = Join-Path $repo ".editorconfig" },
  @{ Source = Join-Path $templatesDir ".gitignore"; Destination = Join-Path $repo ".gitignore" },
  @{ Source = Join-Path $templatesDir ".gitattributes"; Destination = Join-Path $repo ".gitattributes" },
  @{ Source = Join-Path $templatesDir ".github\workflows\pg_refresh_pg_context.yml"; Destination = Join-Path $repo ".github\workflows\pg_refresh_pg_context.yml" },
  @{ Source = Join-Path $templatesDir "AGENTS.md"; Destination = Join-Path $repo "AGENTS.md" },
  @{ Source = Join-Path $templatesDir "CLAUDE.md"; Destination = Join-Path $repo "CLAUDE.md" },
  @{ Source = Join-Path $templateRoot "config.toml"; Destination = Join-Path $repo "config.toml" }
)

foreach ($item in $sharedFiles) {
  Copy-SharedFile -Source $item.Source -Destination $item.Destination
}

$frameworkLinkScript = Join-Path $PSScriptRoot "pg_link_framework.ps1"
if (Test-Path $frameworkLinkScript) {
  & $frameworkLinkScript -RepoPath $repo
}

$docTemplatesSource = Join-Path $templateRoot "doc_templates"
$docTemplatesDest = Join-Path $repo "doc_templates"
if (Test-Path $docTemplatesSource) {
  if (Test-Path $docTemplatesDest) {
    Remove-Item -Path $docTemplatesDest -Recurse -Force
  }
  Copy-Item -Path $docTemplatesSource -Destination $docTemplatesDest -Recurse
  Write-Host "OK: synced doc_templates"
} else {
  Write-Host "SKIP: doc_templates nao encontrado no template"
}

if ($SyncAddon) {
  $addonSource = Join-Path $templateRoot "pg_brodoo"
  $addonDestination = Join-Path $repo "pg_brodoo"

  if (-not (Test-Path $addonSource)) {
    throw "Addon partilhado nao encontrado: $addonSource"
  }

  if (Test-Path $addonDestination) {
    Remove-Item -Path $addonDestination -Recurse -Force
  }

  Copy-Item -Path $addonSource -Destination $addonDestination -Recurse
  Write-Host "OK: synced addon pg_brodoo"
}

Write-Host "OK: sincronizacao de assets partilhados concluida"
