import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/heroSection"
import { ProjectsSection } from "@/components/projectsSection"
import { AboutSection } from "@/components/aboutSection"
import { ContactSection } from "@/components/contactSection"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
