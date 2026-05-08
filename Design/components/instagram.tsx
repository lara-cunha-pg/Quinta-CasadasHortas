import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const instagramImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.02.55-NtUVeRBeLIBRmJOQfMnhbcvIqsPndg.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.02.55-NtUVeRBeLIBRmJOQfMnhbcvIqsPndg.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.02.55-NtUVeRBeLIBRmJOQfMnhbcvIqsPndg.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.02.55-NtUVeRBeLIBRmJOQfMnhbcvIqsPndg.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.02.55-NtUVeRBeLIBRmJOQfMnhbcvIqsPndg.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20ecra%CC%83%202026-05-08%2C%20a%CC%80s%2012.02.55-NtUVeRBeLIBRmJOQfMnhbcvIqsPndg.png",
]

export function Instagram() {
  return (
    <section className="py-24 lg:py-32 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3d4f3f] font-light mb-4">
            Acompanhe a vida na quinta
          </h2>
          <p className="text-[#2d3a2e]/60 font-sans">@casadashortas</p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {instagramImages.map((img, index) => (
            <Link
              key={index}
              href="https://instagram.com/casadashortas"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={img}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                style={{
                  objectPosition: `${(index % 3) * 33}% ${Math.floor(index / 3) * 50 + 25}%`
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://instagram.com/casadashortas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2d3a2e] font-sans text-sm hover:text-[#c9a962] transition-colors"
          >
            Seguir no Instagram
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
