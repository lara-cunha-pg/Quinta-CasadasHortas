import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WineShowcase } from "@/components/wine-showcase"
import { Heritage } from "@/components/heritage"
import { Tradition } from "@/components/tradition"
import { Recognition } from "@/components/recognition"
import { Experiences } from "@/components/experiences"
import { Instagram } from "@/components/instagram"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WineShowcase />
      <Heritage />
      <Tradition />
      <Recognition />
      <Experiences />
      <Instagram />
      <Footer />
    </main>
  )
}
