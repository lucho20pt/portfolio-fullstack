// home.ts
import { Metadata } from 'next'
import { getHero, getTechSkills, getServices, getMetadata } from '@/app/actions'

import { Hero, HeroProps } from '@/components/hero'
import { TechSkills, TechSkillsProps } from '@/components/tech-skills'
import { Comunications } from '@/components/comunications'
import { Services, ServicesProps } from '@/components/services'

export const revalidate = 60
const page = 'HomePage'
const metaData = await getMetadata(page)

export const metadata: Metadata = {
  title: metaData?.title,
  description: metaData?.description,
}

export default async function Home() {
  const heroData: HeroProps | null = await getHero(page) // allow for null
  const techSkillData: TechSkillsProps | null = await getTechSkills(page) // allow for null
  const servicesData: ServicesProps | null = await getServices(page) // allow for null

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
