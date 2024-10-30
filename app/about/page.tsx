// home.ts
import { Metadata } from 'next'
import { Hero, HeroProps } from '@/components/hero'
import { getHero, getMetadata } from '@/app/actions'

export const revalidate = 60
const page = 'About'
const metaData = await getMetadata(page)

export const metadata: Metadata = {
  title: metaData?.title,
  description: metaData?.description,
}

export default async function Home() {
  const heroData: HeroProps | null = await getHero(page) // allow for null

  return (
    <>
      {heroData ? <Hero heroData={heroData} /> : <p>{'loading...'}</p>}

      <div className="container flex flex-col items-center mx-auto gap-28 max-w-full">

      </div>
    </>
  )
}
