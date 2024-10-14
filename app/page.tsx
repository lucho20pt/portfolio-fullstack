import { Hero } from '@/components/hero'
import { TechSkills } from '@/components/tech-skills'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container flex flex-col items-center mx-auto gap-20">
        <TechSkills />
        <About />
        <Projects />
      </div>
    </>
  )
}
