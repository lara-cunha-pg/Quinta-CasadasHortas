"use client"

import { useEffect, useRef, useState } from "react"
import { Mountain, Heart, Wine, Leaf } from "lucide-react"

const features = [
  {
    icon: Mountain,
    title: "Paisagem unica",
    description: "Vistas privilegiadas sobre o Douro e vinhas em socalcos que se perdem no horizonte."
  },
  {
    icon: Heart,
    title: "Producao familiar",
    description: "Historia e autenticidade desde 1994. Tres geracoes dedicadas ao vinho."
  },
  {
    icon: Wine,
    title: "Provas personalizadas",
    description: "Experiencias adaptadas aos seus gostos e interesses, com atencao individual."
  },
  {
    icon: Leaf,
    title: "Ambiente tranquilo",
    description: "Longe do turismo massificado. Um refugio de calma no coracao do Douro."
  }
]

export function ExperiencesFeatures() {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#f5f2eb]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#c9a962]" />
            <span className="text-[10px] tracking-[0.4em] text-[#c9a962] uppercase font-sans">Diferenciadores</span>
            <div className="w-12 h-px bg-[#c9a962]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#3d4f3f]">
            O que torna a experiencia especial
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[#c9a962]/30 mb-6">
                <feature.icon className="w-7 h-7 text-[#c9a962]" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-[#3d4f3f] mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-[#6b7c6c] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
