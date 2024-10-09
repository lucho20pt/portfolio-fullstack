import { Hero } from '@/components/hero'
import { TechSkills } from '@/components/tech-skills'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'

export default function Home() {
  return (
    <>
      <Hero />
      <TechSkills />
      <About />
      <Projects />
    </>
  )
}
