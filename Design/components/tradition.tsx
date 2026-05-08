import { MapPin, Users } from "lucide-react"
import Image from "next/image"

export function Tradition() {
  return (
    <section className="py-24 lg:py-32 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <div className="lg:sticky lg:top-32">
            <p className="text-sm tracking-[0.3em] text-[#c9a962] uppercase mb-4 font-sans">
              Do Terroir à Garrafa
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3d4f3f] font-light leading-tight mb-6">
              Tradição
              <br />
              artesanal
            </h2>
            <div className="w-12 h-0.5 bg-[#c9a962] mb-8" />
            <p className="text-lg text-[#2d3a2e]/80 mb-6 font-sans leading-relaxed">
              Cada garrafa começa nas nossas vinhas, cuidadosamente cultivadas no terroir único do Douro Verde.
            </p>
            <p className="text-base text-[#2d3a2e]/70 mb-10 font-sans leading-relaxed">
              A vindima manual, o cuidado em cada etapa da produção, e o
              respeito pela tradição garantem vinhos de caráter distintivo.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#3d4f3f] rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-sans font-medium text-[#2d3a2e] mb-1">Terroir Único</h4>
                  <p className="text-sm text-[#2d3a2e]/60 font-sans">
                    Vinhas no coração do Douro Verde com microclima excecional
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#3d4f3f] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-sans font-medium text-[#2d3a2e] mb-1">Produção Artesanal</h4>
                  <p className="text-sm text-[#2d3a2e]/60 font-sans">
                    Vindima manual e processos tradicionais preservados
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 lg:h-80 rounded-sm overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.01.52-TKkG3ORjJXy7I8xYCNZKPJqlTZq5yn.png"
                alt="Vinhas do Douro Verde"
                fill
                className="object-cover object-[center_20%]"
              />
            </div>
            <div className="relative h-64 lg:h-80 rounded-sm overflow-hidden mt-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.01.52-TKkG3ORjJXy7I8xYCNZKPJqlTZq5yn.png"
                alt="Uvas na vindima"
                fill
                className="object-cover object-[80%_20%]"
              />
            </div>
            <div className="relative h-64 lg:h-80 rounded-sm overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.02.08-k5qNDCTJUyPyfnLfQXiqlxjDMuAQsL.png"
                alt="Colheita de uvas brancas"
                fill
                className="object-cover object-[center_60%]"
              />
            </div>
            <div className="relative h-64 lg:h-80 rounded-sm overflow-hidden mt-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.02.08-k5qNDCTJUyPyfnLfQXiqlxjDMuAQsL.png"
                alt="Tratores nas vinhas"
                fill
                className="object-cover object-[80%_60%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
