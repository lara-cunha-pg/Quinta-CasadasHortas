"use client"

import { useEffect, useRef, useState } from "react"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quinta-VCNxxqfer1wlikh4oVQXURZlYoamUj.jpeg",
    alt: "Vista aerea da quinta",
    size: "large"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/provas-OamS1psMGjtAABHgbIBIB19ZwTVoru.jpg",
    alt: "Sala de provas",
    size: "medium"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vides-YnZPQJCIn3hnN0fFxpDhvi0lkqU5tI.jpg",
    alt: "Vinhas",
    size: "small"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uvas-PPS52klxkB51OUAs0V5rx2SVNkEfAL.jpg",
    alt: "Uvas",
    size: "small"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/senhora-Pi5C1Qd3ywNtK6dBI1WZdDLAa8MU2S.jpeg",
    alt: "Prova de vinho",
    size: "medium"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/barris-adtKaMgcxyvFO3yLUbGim4nhj6ozI0.jpeg",
    alt: "Barris de carvalho",
    size: "small"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cabec%CC%A7a%20de%20gaio%20branco%20-jcBIX8S7yJKcNEKD1uNJTE1nVki2EZ.jpg",
    alt: "Cabeca de Gaio Branco",
    size: "medium"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cestos-rvbqZaUB7stSAilKtBECceCzlmBqGg.jpg",
    alt: "Vindima",
    size: "large"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/encostas%20de%20baiao-bCYBhJAWb6l4TDyfIaptin44sTItnT.jpg",
    alt: "Encostas de Baiao",
    size: "small"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/piscina-dgpQHHC1vjB8K0MALzMlo2ra63l4bl.jpg",
    alt: "Piscina da quinta",
    size: "medium"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arinto-38BQb8hGhzyKtSFCDfbwIXNbAVzVck.jpg",
    alt: "Portal das Hortas Arinto",
    size: "small"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caseirinho%20-xzahmKUgeVE4jLZt1CJw4gnBPxaPOJ.jpg",
    alt: "Caseirinho",
    size: "medium"
  }
]

export function ExperiencesGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#c9a962]" />
              <span className="text-[10px] tracking-[0.4em] text-[#c9a962] uppercase font-sans">Galeria</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#3d4f3f]">
              Momentos na Casa das Hortas
            </h2>
          </div>
          <a 
            href="https://instagram.com/casadashortas" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#3d4f3f] hover:text-[#c9a962] transition-colors font-sans text-sm"
          >
            <span>@casadashortas</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div 
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto pb-8 px-6 snap-x snap-mandatory scrollbar-hide transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {galleryImages.map((image, index) => (
          <div 
            key={index}
            className={`relative flex-shrink-0 snap-center overflow-hidden rounded-lg group ${
              image.size === "large" ? "w-[500px] h-[400px]" :
              image.size === "medium" ? "w-[350px] h-[400px]" :
              "w-[280px] h-[400px]"
            }`}
          >
            <img 
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-2 text-[#6b7c6c] font-sans text-xs">
          <span>Arrastar para explorar</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
