"use client"

import { useEffect, useRef, useState } from "react"

export function ExperiencesIntro() {
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
    <>
      {/* Quote Section - Há Paisagens e Paisagens */}
      <section className="bg-[#3d4f3f] py-24 md:py-32 lg:py-40">
        <div className={`max-w-3xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
            HA PAISAGENS<br />E PAISAGENS
          </h2>
          <blockquote className="mb-6">
            <p className="font-sans text-lg md:text-xl text-white/80 leading-relaxed italic">
              {'"'}A grandeza igualava a graca. Para os vales, poderosamente cavados, desciam bandos de arvoredos, tao copados e redondos, de um verde tao novo, que eram como um musgo macio onde apetecia cair e rolar.{'"'}
            </p>
          </blockquote>
          <cite className="font-sans text-sm text-white/60 not-italic">
            In a Cidade e as Serras. Eca de Queiros
          </cite>
        </div>
      </section>

      {/* Douro Verde Section */}
      <section 
        ref={sectionRef}
        className="relative bg-[#3d4f3f] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2">
            {/* Text Content */}
            <div className={`px-6 lg:px-16 py-16 lg:py-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-8">
                HA UM <span className="font-bold">DOURO VERDE</span><br />
                PARA DESCOBRIR
              </h2>
              
              <div className="space-y-6 text-white/80 font-sans leading-relaxed">
                <p>
                  As curvas que desenham uma regiao D&apos;Ouro sao a inspiracao de uma paixao inigualavel que liga a Casa das Hortas as origens. Fundada em 1994, e desde sempre com o foco nos vinhos de qualidade de Baiao, a Casa das Hortas e uma das empresas mais antigas da regiao.
                </p>
                <p>
                  Atualmente, integrando ja na gestao da empresa a terceira geracao da familia Azeredo, a Casa das Hortas e maior, melhor equipada e com uma visao mais abrangente, dedicando-se a producao, engarrafamento e distribuicao de vinhos de diferentes regioes vinicolas.
                </p>
                <p>
                  Baiao, a terra que liga o pico da Serra do Marao a uma das mais belas albufeiras do rio Douro, e a casa desta historia rica e de um patrimonio imensuravel.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[400px] lg:h-auto">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/488904903_1207528154361174_7818579318183899668_n-oOUrvJXsjPwrXqzvp9nxDLnRUKUjUV.jpg"
                alt="Vista do Douro Verde com vinhas e rio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Section - Há sempre Espaço(s) para Emoções */}
      <section className="bg-[#f5f2eb] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-[#3d4f3f] leading-tight mb-4">
              HA SEMPRE <span className="font-bold">ESPACO(S)</span><br />
              PARA EMOCOES
            </h2>
            <p className="font-sans text-[#6b7c6c] max-w-xl">
              Deixe-se encantar pelas nossas quintas, cada uma com a sua propria historia, vinhos unicos e paisagens deslumbrantes.
            </p>
          </div>

          {/* Map Image */}
          <div className="mb-8">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/489330450_1207528437694479_6248219259509319320_n-ir1HB6Hdj8R4qu4TLP8utZzKOMfHI3.jpg"
              alt="Mapa das 4 quintas ao longo do Rio Douro"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Quintas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative h-48 overflow-hidden rounded-lg group">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vides-YnZPQJCIn3hnN0fFxpDhvi0lkqU5tI.jpg"
                alt="Vinha da Ermida"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[#c9a962] text-sm font-sans">1.</span>
                <span className="font-serif text-lg ml-2">Vinha da Ermida</span>
              </div>
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg group">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/piscina-dgpQHHC1vjB8K0MALzMlo2ra63l4bl.jpg"
                alt="Jardim das Hortas"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[#c9a962] text-sm font-sans">2.</span>
                <span className="font-serif text-lg ml-2">Jardim das Hortas</span>
              </div>
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg group">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trator-2Sp38bH1mP8dPrkAOTeeZXfkvOnAbL.jpg"
                alt="Quinta da Botica"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[#c9a962] text-sm font-sans">3.</span>
                <span className="font-serif text-lg ml-2">Quinta da Botica</span>
              </div>
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg group">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-section-esquerda-CjJrg9MTMmkQMzJ3PfRQvRGRb9NY6G.jpeg"
                alt="Quinta Vale do Gaio"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[#c9a962] text-sm font-sans">4.</span>
                <span className="font-serif text-lg ml-2">Quinta Vale do Gaio</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
