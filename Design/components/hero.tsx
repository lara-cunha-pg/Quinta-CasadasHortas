import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2011.58.15-YTKOcCIdsvf7pGeKu62GkDaNtwOI92.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.3em] text-white/80 uppercase mb-6 font-sans">
          Douro Verde
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-tight mb-8">
          Vinhos com raiz
          <br />
          no Douro
        </h1>
        <div className="w-16 h-0.5 bg-[#c9a962] mx-auto mb-8" />
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 font-sans leading-relaxed">
          Onde o terroir se transforma em experiência.
          <br />
          Um solar histórico que cultiva tradição desde 1994.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#vinhos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2d3a2e] font-sans text-sm rounded-full hover:bg-white/90 transition-colors"
          >
            Descobrir Vinhos
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#quinta"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white text-white font-sans text-sm rounded-full hover:bg-white/10 transition-colors"
          >
            Visitar a Quinta
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
