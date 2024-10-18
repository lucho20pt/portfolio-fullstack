// page.ts

import { Hero, HeroProps } from '@/components/hero'
import { TechSkills, TechSkillsProps } from '@/components/tech-skills'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { getHero, getTechSkills } from './actions'

export const revalidate = 60

export default async function Home() {
  const heroData: HeroProps | null = await getHero('HomePage') // allow for null
  // console.log("heroData:", heroData)
  const techSkillData: TechSkillsProps | null = await getTechSkills('HomePage') // allow for null
  // console.log("techSkillData:", techSkillData)

  return (
    <>
      {heroData ? <Hero heroData={heroData} /> : <p>{'loading...'}</p>}

      <div className="container flex flex-col items-center mx-auto gap-20">
        {techSkillData ? (
          <TechSkills techSkillData={techSkillData} />
        ) : (
          <p>{'loading...'}</p>
        )}

        <About />

        <Projects />
      </div>
    </>
  )
}
