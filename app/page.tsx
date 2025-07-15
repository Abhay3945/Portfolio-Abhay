import { HeaderPro } from '@/components/HeaderPro'
import { Hero } from '@/components/HeroModern'
import { About } from '@/components/AboutPro'
import { Skills } from '@/components/SkillsPro'
import { Experience } from '@/components/ExperiencePro'
import { Projects } from '@/components/ProjectsPro'
import { Education } from '@/components/Education'
import { Certifications } from '@/components/Certifications'
import { Contact } from '@/components/ContactPro'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderPro />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
