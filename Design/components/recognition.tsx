import { Award } from "lucide-react"
import Image from "next/image"

const awards = [
  {
    name: "ProWein Düsseldorf",
    description: "Presença na maior feira de vinhos do mundo, representando a excelência portuguesa"
  },
  {
    name: "Wine Paris",
    description: "Distinções em competições internacionais que celebram a inovação"
  },
  {
    name: "Essência do Vinho",
    description: "Prémios nacionais de excelência que reconhecem a nossa qualidade"
  }
]

export function Recognition() {
  return (
    <section className="py-24 lg:py-32 bg-[#f5f2eb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-[#c9a962] uppercase mb-4 font-sans">
            Reconhecimento
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3d4f3f] font-light leading-tight mb-6">
            Presentes nos palcos
            <br />
            internacionais
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-lg text-[#2d3a2e]/70 max-w-2xl mx-auto font-sans leading-relaxed">
            Dos nossos terroirs em Portugal aos maiores eventos vinícolas do mundo. A qualidade dos nossos vinhos é reconhecida internacionalmente.
          </p>
        </div>

        {/* Image */}
        <div className="relative h-[50vh] lg:h-[60vh] rounded-sm overflow-hidden mb-16">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.02.39-2gqGo0lRy1E9QRvZwAFwOeNb3nQFyP.png"
            alt="Exposição de vinhos"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="text-center md:text-left">
              <Award className="w-10 h-10 text-[#c9a962] mb-4 mx-auto md:mx-0" />
              <h4 className="font-serif text-2xl text-[#3d4f3f] mb-3">{award.name}</h4>
              <p className="text-sm text-[#2d3a2e]/60 font-sans leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
