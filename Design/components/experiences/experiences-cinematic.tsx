"use client"

import { useEffect, useRef, useState } from "react"

export function ExperiencesCinematic() {
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
    <section ref={sectionRef} className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 transition-transform duration-1000"
        style={{ transform: isVisible ? "scale(1)" : "scale(1.1)" }}
      >
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-CDmTaEiKQUHWKvaUZWGwIFVrOxCaFE.jpg"
          alt="Vista panoramica das vinhas do Douro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className={`max-w-xl transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <span className="text-[10px] tracking-[0.4em] text-[#c9a962] uppercase font-sans mb-4 block">
              Desde 1994
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Cada garrafa comeca aqui.
            </h2>
            <p className="font-sans text-lg text-white/80 leading-relaxed mb-8">
              Entre vinhas centenarias e o rio Douro, criamos vinhos que contam a historia desta terra. 
              Uma historia de familia, tradicao e paixao pelo que fazemos.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <span className="font-serif text-4xl text-[#c9a962]">30+</span>
                <span className="block text-sm text-white/60 font-sans mt-1">Anos de historia</span>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <span className="font-serif text-4xl text-[#c9a962]">4</span>
                <span className="block text-sm text-white/60 font-sans mt-1">Quintas</span>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <span className="font-serif text-4xl text-[#c9a962]">2</span>
                <span className="block text-sm text-white/60 font-sans mt-1">Regioes DOC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
