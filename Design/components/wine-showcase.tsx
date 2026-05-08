import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const wines = [
  {
    id: 1,
    category: "Vinho Verde DOC",
    name: "Portal das Hortas",
    type: "Arinto Reserva",
    description: "Vibrante acidez e mineralidade marcante. Aromas cítricos e tropicais que convidam à descoberta.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2011.59.56-BUJV94Ed1F3ltAupcHW0f6DiszaPxw.png",
    imagePosition: "right"
  },
  {
    id: 2,
    category: "Vinho Verde DOC",
    name: "Saiote",
    type: "Vinho Verde Rosé",
    description: "Fresco e aromático, com notas florais e frutos vermelhos. Elegância e leveza numa garrafa que celebra momentos especiais.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2011.59.20-4W0adhgxxZ3kmLnLigM0lTTMhmZ3Y4.png",
    imagePosition: "right"
  },
  {
    id: 3,
    category: "Douro DOC",
    name: "Cabeça de Gaio",
    type: "Reserva Tinto",
    description: "Elegante e estruturado, revela camadas de frutos vermelhos maduros, especiarias e notas de madeira tostada. Um vinho de caráter, que reflete a força do Douro.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2011.59.01-fCoIjtqUKNWbzEYESOzUo4djKtToyd.png",
    imagePosition: "left"
  },
  {
    id: 4,
    category: "Douro DOC",
    name: "Cabeça de Gaio",
    type: "Reserva Branco",
    description: "Complexo e mineral, equilibra frescura cítrica com notas florais e toque de madeira. Perfeito para gastronomia refinada.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2011.59.39-pnYTx4XdglJAsejLUVRsVfv5OV1hlQ.png",
    imagePosition: "left"
  },
]

export function WineShowcase() {
  return (
    <section id="vinhos" className="bg-[#f5f2eb]">
      {wines.map((wine, index) => (
        <div
          key={wine.id}
          className={`grid lg:grid-cols-2 min-h-[80vh] ${
            wine.imagePosition === "left" ? "" : "lg:[direction:rtl]"
          }`}
        >
          {/* Image */}
          <div className="relative h-[50vh] lg:h-auto lg:[direction:ltr]">
            <Image
              src={wine.image}
              alt={`${wine.name} - ${wine.type}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex items-center justify-center px-6 lg:px-16 py-16 lg:py-0 lg:[direction:ltr]">
            <div className="max-w-md">
              <p className="text-sm tracking-[0.2em] text-[#c9a962] uppercase mb-4 font-sans">
                {wine.category}
              </p>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3d4f3f] font-light mb-2">
                {wine.name}
              </h3>
              <p className="text-xl text-[#2d3a2e] mb-6 font-sans">
                {wine.type}
              </p>
              <div className="w-12 h-0.5 bg-[#c9a962] mb-6" />
              <p className="text-base text-[#2d3a2e]/70 mb-8 font-sans leading-relaxed">
                {wine.description}
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[#2d3a2e] font-sans text-sm hover:text-[#c9a962] transition-colors"
              >
                Explorar este vinho
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* CTA Section */}
      <div className="bg-[#3d4f3f] py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light italic mb-6">
            Descubra toda a nossa coleção
          </h3>
          <p className="text-white/70 font-sans mb-10 max-w-xl mx-auto">
            Portal das Hortas, Cabeça de Gaio, Saiote e edições limitadas.
            <br />
            Cada vinho conta uma história única do Douro.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#c9a962] text-white font-sans text-sm rounded-sm hover:bg-[#b8984f] transition-colors"
          >
            Ver Todos os Vinhos
          </Link>
        </div>
      </div>
    </section>
  )
}
