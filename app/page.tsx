// page.ts

import { Hero, HeroProps } from '@/components/hero'
import { TechSkills } from '@/components/tech-skills'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { getHero } from './actions'

export const revalidate = 60

export default async function Home() {
  const heroData: HeroProps | null = await getHero('HomePage') // allow for null
  console.log("home:", heroData)

  return (
    <>
      {heroData ? <Hero heroData={heroData} /> : <p>{'loading...'}</p>}
      <div className="container flex flex-col items-center mx-auto gap-20">
        <TechSkills />
        <About />
        <Projects />
      </div>
    </>
  )
}
