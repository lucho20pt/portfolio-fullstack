import { Metadata } from 'next'
import { getHero, getMetadata, getArticles } from '@/app/actions'
import { Hero, HeroProps } from '@/components/hero'
import { Article, ArticleProps } from '@/components/about'
import { Comunications } from '@/components/comunications'
import { ButtonPrimary } from '@/components/ui/tailwindcss-buttons'

export const revalidate = 60
const page = 'About'
const metaData = await getMetadata(page)

export const metadata: Metadata = {
  title: metaData?.title,
  description: metaData?.description,
}

export default async function About() {
  const heroData: HeroProps | null = await getHero(page) // allow for null
  const articleData: ArticleProps[] | null = await getArticles(page)

  return (
    <>
      {heroData ? <Hero heroData={heroData} /> : <p>{'loading...'}</p>}

      <div className="container flex flex-col items-center mx-auto gap-20 max-w-full">
        <section id="about" className="flex flex-col gap-20">
          {articleData && articleData.length > 0 ? (
            articleData.map((article) => (
              <Article key={article._key} {...article} />
            ))
          ) : (
            <p>{'loading...'}</p>
          )}
        </section>

        <ButtonPrimary
          className="text-xl"
          href="/projects"
          aria-label="View Projects"
        >
          View Some Projects
        </ButtonPrimary>
        
        <Comunications />
      </div>
    </>
  )
}
