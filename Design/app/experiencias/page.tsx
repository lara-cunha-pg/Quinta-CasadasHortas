"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExperiencesHero } from "@/components/experiences/experiences-hero"
import { ExperiencesIntro } from "@/components/experiences/experiences-intro"
import { ExperienceCards } from "@/components/experiences/experience-cards"
import { ExperiencesGallery } from "@/components/experiences/experiences-gallery"
import { ExperiencesFeatures } from "@/components/experiences/experiences-features"
import { ExperiencesCinematic } from "@/components/experiences/experiences-cinematic"
import { ExperiencesTestimonials } from "@/components/experiences/experiences-testimonials"
import { ExperiencesFaq } from "@/components/experiences/experiences-faq"
import { ExperiencesCta } from "@/components/experiences/experiences-cta"

export default function ExperienciasPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ExperiencesHero />
      <ExperiencesIntro />
      <ExperienceCards />
      <ExperiencesGallery />
      <ExperiencesFeatures />
      <ExperiencesCinematic />
      <ExperiencesTestimonials />
      <ExperiencesFaq />
      <ExperiencesCta />
      <Footer />
    </main>
  )
}
