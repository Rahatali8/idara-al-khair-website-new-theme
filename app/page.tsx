import HeroSection from "@/components/HeroSection"
import StatsSection from "@/components/StatsSection"
import ImageCarousel from "@/components/ImageCarousel"
import ProjectCards from "@/components/ProjectCards"
import TestimonialsSection from "@/components/TestimonialsSection"
import CallToAction from "@/components/CallToAction"
import DonorsCarousel from "@/components/DonorsCarousel"
import AboutSection from "@/components/AboutSection"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ImageCarousel />
      <AboutSection />
      <StatsSection />
      <ProjectCards />
      <TestimonialsSection />
      <DonorsCarousel />
      <CallToAction />
    </main>
  )
}
