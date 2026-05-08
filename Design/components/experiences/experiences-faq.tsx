"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "E necessario fazer reserva?",
    answer: "Sim, todas as experiencias requerem reserva previa. Recomendamos reservar com pelo menos 48 horas de antecedencia, especialmente em epoca alta (Maio a Outubro)."
  },
  {
    question: "Qual e a duracao das experiencias?",
    answer: "As nossas experiencias variam entre 45 minutos e 4 horas, dependendo do programa escolhido. A prova basica dura cerca de 45-90 minutos, enquanto a experiencia completa 'Casa das Hortas a Mesa' dura aproximadamente 4 horas."
  },
  {
    question: "Quantas pessoas podem participar?",
    answer: "Dependendo da experiencia, acolhemos grupos de 2 a 12 pessoas. Para grupos maiores ou eventos privados, contacte-nos diretamente para solucoes personalizadas."
  },
  {
    question: "As criancas podem participar?",
    answer: "Sim, as criancas sao bem-vindas para as visitas a quinta. No entanto, as provas de vinho sao reservadas a maiores de 18 anos. Dispomos de sumos naturais e outras bebidas para os mais novos."
  },
  {
    question: "Em que idiomas sao realizadas as experiencias?",
    answer: "As nossas experiencias sao realizadas em Portugues, Ingles, Frances e Espanhol. Por favor, indique a sua preferencia no momento da reserva."
  },
  {
    question: "Como chegar a Casa das Hortas?",
    answer: "Estamos localizados em Baiao, a cerca de 1 hora do Porto. Disponibilizamos indicacoes detalhadas apos a confirmacao da reserva. Ha estacionamento gratuito na quinta."
  },
  {
    question: "Qual e o horario de funcionamento?",
    answer: "Epoca Baixa (Novembro a Abril): 10h00 - 15h00. Epoca Alta (Maio a Outubro): 10h00 - 16h00. Fechado aos domingos."
  },
  {
    question: "Existe opcao vegetariana ou vegan?",
    answer: "Sim, todas as nossas tabuas podem ser adaptadas para opcoes vegetarianas ou vegan. Por favor, indique as suas preferencias ou restricoes alimentares no momento da reserva."
  }
]

export function ExperiencesFaq() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#f5f2eb]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#c9a962]" />
            <span className="text-[10px] tracking-[0.4em] text-[#c9a962] uppercase font-sans">FAQ</span>
            <div className="w-12 h-px bg-[#c9a962]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#3d4f3f]">
            Perguntas frequentes
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-[#d4d0c5] last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-sans text-[#3d4f3f] group-hover:text-[#c9a962] transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#c9a962] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="font-sans text-[#6b7c6c] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={`text-center mt-12 pt-12 border-t border-[#d4d0c5] transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="font-sans text-[#6b7c6c] mb-4">
            Tem outra questao?
          </p>
          <a 
            href="mailto:enoturismo@casadashortas.pt"
            className="inline-flex items-center gap-2 text-[#3d4f3f] hover:text-[#c9a962] font-sans transition-colors"
          >
            <span>enoturismo@casadashortas.pt</span>
          </a>
        </div>
      </div>
    </section>
  )
}
