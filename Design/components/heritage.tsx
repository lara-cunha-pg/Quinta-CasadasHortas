import Image from "next/image"

export function Heritage() {
  return (
    <section className="grid lg:grid-cols-2 min-h-[90vh]">
      {/* Image */}
      <div className="relative h-[60vh] lg:h-auto">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.00.39-gFwTrwrAcshuLL0Y7cymlohAoIyEAk.png"
          alt="Salão histórico da Casa das Hortas"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="bg-[#f5f2eb] flex items-center justify-center px-6 lg:px-16 py-16 lg:py-0">
        <div className="max-w-lg">
          <p className="text-sm tracking-[0.3em] text-[#c9a962] uppercase mb-4 font-sans">
            Heritage
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3d4f3f] font-light leading-tight mb-6">
            Um solar
            <br />
            com história
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a962] mb-8" />
          <p className="text-lg text-[#2d3a2e]/80 mb-6 font-sans leading-relaxed">
            O nosso salão nobre é testemunha viva de décadas de tradição vinícola.
          </p>
          <p className="text-base text-[#2d3a2e]/70 mb-10 font-sans leading-relaxed">
            Com tetos trabalhados e arquitetura histórica preservada, cada
            detalhe conta a história de gerações dedicadas à arte do vinho.
            Desde 1994, honramos este legado combinando métodos
            tradicionais com inovação contemporânea.
          </p>

          {/* Stats */}
          <div className="flex gap-16">
            <div>
              <p className="font-serif text-5xl text-[#c9a962]">1994</p>
              <p className="text-sm text-[#2d3a2e]/60 font-sans mt-1">Fundação</p>
            </div>
            <div>
              <p className="font-serif text-5xl text-[#c9a962]">30+</p>
              <p className="text-sm text-[#2d3a2e]/60 font-sans mt-1">Anos de tradição</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
