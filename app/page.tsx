'use client'
import { useEffect, useState } from 'react'

import { Hero, HeroProps } from '@/components/hero'
import { TechSkills } from '@/components/tech-skills'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'

import { getHero } from './actions'

export default function Home() {
  const [heroData, setHeroData] = useState<HeroProps | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hero = await getHero('HomePage')

        setHeroData(hero as HeroProps | null)
      } catch (error) {
        console.error(error) // Log the error
      }
    }
    fetchData()
  }, [])

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
