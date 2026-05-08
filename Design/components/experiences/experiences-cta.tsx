"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone } from "lucide-react"

export function ExperiencesCta() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="reservar" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/paisagem-tdoo7YQ1VuJXshRvVhLUEcXFHHn6pQ.jpg"
          alt="Vista das vinhas do Douro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3d4f3f]/90" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Label */}
          <span className="inline-block text-[10px] tracking-[0.4em] text-[#c9a962] uppercase font-sans mb-6">
            Reserve a sua experiencia
          </span>

          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Venha descobrir o Douro connosco
          </h2>

          {/* Text */}
          <p className="font-sans text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Entre em contacto para reservar a sua experiencia ou para criar um programa personalizado para o seu grupo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:enoturismo@casadashortas.pt"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c9a962] text-white font-sans text-sm tracking-wide rounded-full hover:bg-[#b8984f] transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Reservar por Email
            </a>
            <a
              href="tel:+351254881487"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/50 text-white font-sans text-sm tracking-wide rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              +351 254 881 487
            </a>
          </div>

          {/* Schedule Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <span className="block text-[10px] tracking-[0.3em] text-white/50 uppercase font-sans mb-2">Epoca Baixa (Nov-Abr)</span>
              <span className="font-sans text-white">10h00 - 15h00</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20" />
            <div className="text-center">
              <span className="block text-[10px] tracking-[0.3em] text-white/50 uppercase font-sans mb-2">Epoca Alta (Mai-Out)</span>
              <span className="font-sans text-white">10h00 - 16h00</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20" />
            <div className="text-center">
              <span className="block text-[10px] tracking-[0.3em] text-white/50 uppercase font-sans mb-2">Reservas</span>
              <span className="font-sans text-[#c9a962]">enoturismo@casadashortas.pt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
