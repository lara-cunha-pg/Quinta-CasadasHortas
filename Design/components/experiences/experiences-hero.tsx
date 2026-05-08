"use client"

import { useEffect, useRef, useState } from "react"

export function ExperiencesHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#2d3a2e]">
          <iframe
            ref={videoRef}
            src="https://player.vimeo.com/video/705447680?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="absolute w-[177.77vh] min-w-full h-[56.25vw] min-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; fullscreen"
            style={{ border: "none" }}
          />
        </div>
        {/* Fallback Image */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-9pYwD5GWhD9nu4trSuwpDsbIDEw2qM.jpg"
          alt="Vinhas do Douro"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Label */}
          <span className="inline-block text-[11px] tracking-[0.35em] text-[#c9a962] uppercase font-sans mb-6 border border-[#c9a962]/30 px-4 py-2">
            Experiencias no Douro
          </span>
          
          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white leading-tight mb-6">
            Mais do que uma visita.
            <br />
            <span className="text-[#c9a962]">Uma experiencia entre vinhas e vinho.</span>
          </h1>
          
          {/* Subtext */}
          <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Descubra a Casa das Hortas atraves de provas, visitas guiadas e momentos unicos no coracao do Douro.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#reservar"
              className="px-8 py-4 bg-[#c9a962] text-white font-sans text-sm tracking-wide rounded-full hover:bg-[#b8984f] transition-all duration-300"
            >
              Reservar Experiencia
            </a>
            <a
              href="#experiencias"
              className="px-8 py-4 border border-white/50 text-white font-sans text-sm tracking-wide rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Ver Experiencias
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] text-white/60 uppercase font-sans">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
