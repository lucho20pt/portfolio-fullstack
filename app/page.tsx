// home.ts

import { Hero, HeroProps } from '@/components/hero'
import { TechSkills, TechSkillsProps } from '@/components/tech-skills'
import { getHero, getTechSkills, getServices } from './actions'
import { Comunications } from '@/components/comunications/comunications'
import { Services, ServicesProps } from '@/components/services/services'

export const revalidate = 60

export default async function Home() {
  const page = 'HomePage'
  const heroData: HeroProps | null = await getHero(page) // allow for null
  const techSkillData: TechSkillsProps | null = await getTechSkills(page) // allow for null
  const servicesData: ServicesProps | null = await getServices(page)

  return (
    <>
      {heroData ? <Hero heroData={heroData} /> : <p>{'loading...'}</p>}

      <div className="container flex flex-col items-center mx-auto gap-28 max-w-full">
        {techSkillData ? (
          <TechSkills techSkillData={techSkillData} />
        ) : (
          <p>{'loading...'}</p>
        )}

        <Comunications />

        {servicesData ? (
          <Services servicesData={servicesData} />
        ) : (
          <p>{'loading...'}</p>
        )}

      </div>
    </>
  )
}
