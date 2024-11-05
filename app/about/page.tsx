import { Metadata } from 'next'
import { getHero, getMetadata, getArticles } from '@/app/actions'
import { Hero, HeroProps } from '@/components/hero'
import { Article, ArticleProps } from '@/components/about'

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
  console.log('articleData', articleData)

  return (
    <>
      {heroData ? <Hero heroData={heroData} /> : <p>{'loading...'}</p>}

      <div className="container flex flex-col items-center mx-auto gap-28 max-w-full">
        {articleData && articleData.length > 0 ? (
          articleData.map((article) => (
            <Article key={article._key} {...article} />
          ))
        ) : (
          <p>{'loading...'}</p>
        )}
      </div>
    </>
  )
}
