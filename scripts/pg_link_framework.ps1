param(
  [Parameter(Mandatory = $true)]
  [string]$RepoPath,

  [string]$FrameworkPath,

  [switch]$Force
)

$ErrorActionPreference = "Stop"

function Resolve-TemplateRoot {
  return (Split-Path -Parent $PSScriptRoot)
}

$repo = [System.IO.Path]::GetFullPath($RepoPath)
if (-not (Test-Path $repo)) {
  throw "Repositorio nao encontrado: $repo"
}

$resolvedFrameworkPath = if ($FrameworkPath) {
  [System.IO.Path]::GetFullPath($FrameworkPath)
} else {
  Resolve-TemplateRoot
}

if (-not (Test-Path $resolvedFrameworkPath)) {
  throw "Framework nao encontrado em $resolvedFrameworkPath"
}

$linkPath = Join-Path $repo ".pg_framework"
if (Test-Path $linkPath) {
  $linkIsStale = $false
  try {
    $testScript = Join-Path $linkPath "scripts\pg_refresh_pg_context.ps1"
    if (-not (Test-Path $testScript)) { $linkIsStale = $true }
  } catch {
    $linkIsStale = $true
  }

  if ($Force -or $linkIsStale) {
    Remove-Item -Path $linkPath -Force -Recurse
    if ($linkIsStale -and -not $Force) {
      Write-Host "WARN: .pg_framework apontava para destino invalido - a recriar"
    }
  } else {
    Write-Host "SKIP: $linkPath ja existe"
    return
  }
}

try {
  New-Item -ItemType Junction -Path $linkPath -Target $resolvedFrameworkPath | Out-Null
} catch {
  $escapedLink = '"' + $linkPath + '"'
  $escapedTarget = '"' + $resolvedFrameworkPath + '"'
  cmd /c "mklink /J $escapedLink $escapedTarget" | Out-Null
}

Write-Host "OK: .pg_framework -> $resolvedFrameworkPath"
