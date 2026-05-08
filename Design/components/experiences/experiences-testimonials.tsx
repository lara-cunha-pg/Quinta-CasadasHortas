"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    text: "Uma das experiencias mais autenticas que tivemos no Douro. A familia recebeu-nos como se fossemos amigos de longa data.",
    author: "Maria & Joao",
    location: "Lisboa, Portugal",
    rating: 5
  },
  {
    text: "Os vinhos sao excelentes e a vista e absolutamente deslumbrante. Voltaremos com certeza.",
    author: "Pierre & Sophie",
    location: "Lyon, Franca",
    rating: 5
  },
  {
    text: "Perfeito para quem procura fugir ao turismo massificado. Tranquilidade, vinhos de qualidade e pessoas genuinas.",
    author: "Carlos Mendes",
    location: "Porto, Portugal",
    rating: 5
  },
  {
    text: "The wine tasting was exceptional. They really took the time to explain everything about their wines and the region.",
    author: "Emma & James",
    location: "London, UK",
    rating: 5
  }
]

export function ExperiencesTestimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#c9a962]" />
            <span className="text-[10px] tracking-[0.4em] text-[#c9a962] uppercase font-sans">Testemunhos</span>
            <div className="w-12 h-px bg-[#c9a962]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#3d4f3f]">
            O que dizem os nossos visitantes
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`p-8 md:p-10 bg-[#f5f2eb] rounded-lg transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c9a962] text-[#c9a962]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl md:text-2xl text-[#3d4f3f] leading-relaxed mb-6">
                {'"'}{testimonial.text}{'"'}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3d4f3f] flex items-center justify-center">
                  <span className="text-white font-sans text-sm">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <span className="block font-sans text-sm text-[#3d4f3f] font-medium">
                    {testimonial.author}
                  </span>
                  <span className="text-xs text-[#6b7c6c] font-sans">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Links */}
        <div className={`flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-[#e8e4db] transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <a href="#" className="flex items-center gap-2 text-[#6b7c6c] hover:text-[#3d4f3f] font-sans text-sm transition-colors">
            <span>Ver mais no Google</span>
            <span className="text-[#c9a962]">4.9</span>
            <Star className="w-4 h-4 fill-[#c9a962] text-[#c9a962]" />
          </a>
          <a href="#" className="flex items-center gap-2 text-[#6b7c6c] hover:text-[#3d4f3f] font-sans text-sm transition-colors">
            <span>Ver mais no TripAdvisor</span>
            <span className="text-[#c9a962]">5.0</span>
            <Star className="w-4 h-4 fill-[#c9a962] text-[#c9a962]" />
          </a>
        </div>
      </div>
    </section>
  )
}
