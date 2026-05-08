"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, Wine, Users, MapPin } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Prova Vinho Verde",
    subtitle: "A essencia do Douro Verde",
    description: "Uma introducao aos nossos vinhos atraves de uma prova guiada com 3 vinhos da regiao, acompanhada de produtos regionais.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3%20vinhos-rw8R5UrTk19HMrvxcp8ei3wlM1ua20.jpg",
    details: {
      duration: "45 a 90 min",
      wines: "3 Vinhos",
      includes: "Tabua Hortinha (Mel e Compotas)",
      people: "2 a 10 pessoas"
    },
    price: "Desde 15EUR/pessoa"
  },
  {
    id: 2,
    title: "Prova Vinho Verde Superior",
    subtitle: "Descoberta aprofundada",
    description: "Uma experiencia mais completa com 4 vinhos premium, incluindo reservas, harmonizados com queijos e enchidos regionais.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4%20vinho%20s-mx5UzY35LrgqykKT3RyeArgHae3XhZ.jpg",
    details: {
      duration: "45 a 90 min",
      wines: "4 Vinhos",
      includes: "Tabua Hortas (Queijos e Enchidos)",
      people: "2 a 10 pessoas"
    },
    price: "Desde 25EUR/pessoa",
    note: "Opcao Vegan disponivel"
  },
  {
    id: 3,
    title: "Prova Gaio",
    subtitle: "Vinhos DOC Douro",
    description: "Explore a gama Cabeca de Gaio, os nossos vinhos DOC Douro, numa prova intimista com vista privilegiada sobre as vinhas.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d.o.c-ikIMJXb6HjkgLBpze2HnDvGguNrmJ7.jpg",
    details: {
      duration: "60 a 90 min",
      wines: "2 a 4 Vinhos",
      includes: "Tabua Premium",
      people: "2 a 8 pessoas"
    },
    price: "Desde 35EUR/pessoa"
  },
  {
    id: 4,
    title: "Prova 2 Regioes",
    subtitle: "Vinho Verde & Douro",
    description: "Uma experiencia unica que atravessa duas regioes vinicolas distintas. Prove e compare os terroirs que fazem a nossa historia.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/provas-vista-sTFA4D3mVirbPKgdEhdAWw0KueYfbq.jpg",
    details: {
      duration: "60 a 90 min",
      wines: "4 a 6 Vinhos",
      includes: "Tabua Completa",
      people: "2 a 8 pessoas"
    },
    price: "Desde 45EUR/pessoa"
  },
  {
    id: 5,
    title: "Only The Best",
    subtitle: "A selecao premium",
    description: "Os melhores vinhos da Casa das Hortas numa prova exclusiva. Reservas, grandes reservas e edicoes limitadas.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cabec%CC%A7a%20de%20gaio-sRQQNM8c37j7TuA1kYhViaRsYYln84.jpeg",
    details: {
      duration: "90 min",
      wines: "5 Vinhos Premium",
      includes: "Selecao Gourmet",
      people: "2 a 6 pessoas"
    },
    price: "Desde 65EUR/pessoa",
    featured: true
  },
  {
    id: 6,
    title: "Passeio Off Road + Prova",
    subtitle: "Aventura nas vinhas",
    description: "Percorra as nossas vinhas de jeep, conheca o terroir de perto e termine com uma prova panoramica inesquecivel.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trator-2-dcQWXiDa8Q75ZfpSif7jh6wo5ZwGZi.jpg",
    details: {
      duration: "90 a 120 min",
      wines: "3 Vinhos",
      includes: "Tour + Tabua",
      people: "2 a 6 pessoas"
    },
    price: "Desde 55EUR/pessoa"
  },
  {
    id: 7,
    title: "Picnic nas Hortas",
    subtitle: "Momento bucolico",
    description: "Um picnic exclusivo entre as vinhas com vista para o Douro. Produtos locais, vinhos frescos e tranquilidade absoluta.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avesso%20-q8qa4k4KVzoKnt3qvjrlBkgT2RqhLC.jpg",
    details: {
      duration: "2 a 3 horas",
      wines: "2 Garrafas",
      includes: "Cesta Gourmet Completa",
      people: "2 a 8 pessoas"
    },
    price: "Desde 85EUR/casal"
  },
  {
    id: 8,
    title: "Casa das Hortas a Mesa",
    subtitle: "Experiencia completa",
    description: "A experiencia mais completa: visita a quinta, prova comentada, almoco tradicional e tarde entre vinhas.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sala%20de%20provas%20-hjqVTdMyio6VvJTj24RGAIu9iRUgB9.jpg",
    details: {
      duration: "4 horas",
      wines: "Varios",
      includes: "Visita + Almoco + Prova",
      people: "4 a 12 pessoas"
    },
    price: "Sob consulta",
    featured: true
  }
]

function ExperienceCard({ experience, index }: { experience: typeof experiences[0], index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isReversed = index % 2 === 1

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={cardRef}
      className={`grid lg:grid-cols-2 gap-0 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      {/* Image */}
      <div className={`relative h-[400px] lg:h-[600px] overflow-hidden ${isReversed ? "lg:order-2" : ""}`}>
        <img 
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        {experience.featured && (
          <div className="absolute top-6 left-6 bg-[#c9a962] text-white px-4 py-2 text-xs tracking-wider uppercase font-sans">
            Recomendado
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-center p-8 lg:p-16 ${isReversed ? "lg:order-1 bg-[#3d4f3f] text-white" : "bg-[#f5f2eb]"}`}>
        {/* Label */}
        <span className={`text-[10px] tracking-[0.4em] uppercase font-sans mb-4 ${isReversed ? "text-[#c9a962]" : "text-[#c9a962]"}`}>
          {experience.subtitle}
        </span>

        {/* Title */}
        <h3 className={`font-serif text-3xl lg:text-4xl mb-4 ${isReversed ? "text-white" : "text-[#3d4f3f]"}`}>
          {experience.title}
        </h3>

        {/* Description */}
        <p className={`font-sans leading-relaxed mb-8 ${isReversed ? "text-white/80" : "text-[#6b7c6c]"}`}>
          {experience.description}
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Clock className={`w-5 h-5 ${isReversed ? "text-[#c9a962]" : "text-[#c9a962]"}`} />
            <div>
              <span className={`text-xs uppercase tracking-wide block ${isReversed ? "text-white/60" : "text-[#6b7c6c]"}`}>Duracao</span>
              <span className={`text-sm font-sans ${isReversed ? "text-white" : "text-[#3d4f3f]"}`}>{experience.details.duration}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Wine className={`w-5 h-5 ${isReversed ? "text-[#c9a962]" : "text-[#c9a962]"}`} />
            <div>
              <span className={`text-xs uppercase tracking-wide block ${isReversed ? "text-white/60" : "text-[#6b7c6c]"}`}>Vinhos</span>
              <span className={`text-sm font-sans ${isReversed ? "text-white" : "text-[#3d4f3f]"}`}>{experience.details.wines}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className={`w-5 h-5 ${isReversed ? "text-[#c9a962]" : "text-[#c9a962]"}`} />
            <div>
              <span className={`text-xs uppercase tracking-wide block ${isReversed ? "text-white/60" : "text-[#6b7c6c]"}`}>Inclui</span>
              <span className={`text-sm font-sans ${isReversed ? "text-white" : "text-[#3d4f3f]"}`}>{experience.details.includes}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className={`w-5 h-5 ${isReversed ? "text-[#c9a962]" : "text-[#c9a962]"}`} />
            <div>
              <span className={`text-xs uppercase tracking-wide block ${isReversed ? "text-white/60" : "text-[#6b7c6c]"}`}>Pessoas</span>
              <span className={`text-sm font-sans ${isReversed ? "text-white" : "text-[#3d4f3f]"}`}>{experience.details.people}</span>
            </div>
          </div>
        </div>

        {/* Note */}
        {experience.note && (
          <p className={`text-xs font-sans mb-6 ${isReversed ? "text-[#c9a962]" : "text-[#c9a962]"}`}>
            * {experience.note}
          </p>
        )}

        {/* Price & CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className={`font-serif text-2xl ${isReversed ? "text-[#c9a962]" : "text-[#3d4f3f]"}`}>
            {experience.price}
          </span>
          <a 
            href="#reservar"
            className={`px-8 py-3 font-sans text-sm tracking-wide rounded-full transition-all duration-300 ${
              isReversed 
                ? "bg-[#c9a962] text-white hover:bg-[#b8984f]" 
                : "bg-[#3d4f3f] text-white hover:bg-[#2d3a2e]"
            }`}
          >
            Reservar
          </a>
        </div>
      </div>
    </div>
  )
}

export function ExperienceCards() {
  return (
    <section id="experiencias" className="bg-[#f5f2eb]">
      {/* Section Header */}
      <div className="py-20 text-center px-6">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-[#c9a962]" />
          <span className="text-[10px] tracking-[0.4em] text-[#c9a962] uppercase font-sans">Experiencias</span>
          <div className="w-12 h-px bg-[#c9a962]" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-[#3d4f3f] mb-4">
          Ha provar e provar
        </h2>
        <p className="font-sans text-[#6b7c6c] max-w-2xl mx-auto">
          Cada experiencia foi pensada para diferentes momentos e desejos. 
          Escolha a sua e deixe-se envolver pelo Douro.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-0">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.id} experience={experience} index={index} />
        ))}
      </div>
    </section>
  )
}
