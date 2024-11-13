import { Metadata } from 'next'
import { getHero, getMetadata } from '@/app/actions'
import { Hero, HeroProps } from '@/components/hero'
import { ProjectsList } from '@/components/projects'

export const revalidate = 60
const page = 'Projects'
const metaData = await getMetadata(page)

export const metadata: Metadata = {
  title: metaData?.title,
  description: metaData?.description,
}

export default async function Projects() {
  const heroData: HeroProps | null = await getHero(page)

  return (
    <>
      {heroData ? <Hero heroData={heroData} /> : <p>{'loading...'}</p>}

      <div className="container flex flex-col items-center mx-auto gap-28">
        <section id="projects" className="flex flex-col gap-28 w-full max-w-7xl">
          <ProjectsList />
        </section>
      </div>
    </>
  )
}
