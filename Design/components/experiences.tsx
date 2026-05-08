import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Experiences() {
  return (
    <section id="experiencias" className="py-24 lg:py-32 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-[#c9a962] uppercase mb-4 font-sans">
            Experiências
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3d4f3f] font-light leading-tight mb-6">
            Viver a Casa das Hortas
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-lg text-[#2d3a2e]/70 max-w-2xl mx-auto font-sans leading-relaxed">
            Mais do que uma prova de vinhos. Uma imersão completa no universo do Douro, onde paisagem, gastronomia e tradição se encontram.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Experience */}
          <div className="lg:col-span-2 relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.01.21-jPqIBYCaYDQZRHCROEfpiDE7SEqGGK.png"
              alt="Provas com vista panorâmica"
              fill
              className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs tracking-[0.2em] text-white/70 uppercase mb-2 font-sans">
                Experiência Premium
              </p>
              <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3">
                Provas com Vista Panorâmica
              </h3>
              <p className="text-white/80 font-sans text-sm mb-6 max-w-md">
                Na nossa sala de provas contemporânea, cada copo acompanha a paisagem do Douro numa experiência sensorial completa.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[#c9a962] font-sans text-sm hover:text-white transition-colors"
              >
                Reservar
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Side Experiences */}
          <div className="flex flex-col gap-6">
            <div className="relative h-[290px] rounded-sm overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.01.21-jPqIBYCaYDQZRHCROEfpiDE7SEqGGK.png"
                alt="Experiências exclusivas"
                fill
                className="object-cover object-[80%_center] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="font-serif text-xl text-white mb-1">Experiências Exclusivas</h4>
                <p className="text-white/70 font-sans text-sm">Piscina e vinhas</p>
              </div>
            </div>

            <div className="relative h-[290px] rounded-sm overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.01.21-jPqIBYCaYDQZRHCROEfpiDE7SEqGGK.png"
                alt="Vindimas autênticas"
                fill
                className="object-cover object-[20%_80%] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="font-serif text-xl text-white mb-1">Vindimas Autênticas</h4>
                <p className="text-white/70 font-sans text-sm">Colheita manual</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a962] text-white font-sans text-sm rounded-full hover:bg-[#b8984f] transition-colors"
          >
            <Calendar size={18} />
            Reservar Experiência
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
