import { Metadata } from 'next'
import { getHero, getMetadata } from '@/app/actions'
import { Hero, HeroProps } from '@/components/hero'
import { ContactForm } from '@/components/contact'

export const revalidate = 60
const page = 'Contact'
const metaData = await getMetadata(page)

export const metadata: Metadata = {
  title: metaData?.title,
  description: metaData?.description,
}

export default async function Contact() {
  const heroData: HeroProps | null = await getHero(page)

  return (
    <>
      {heroData ? <Hero heroData={heroData} /> : <p>{'loading...'}</p>}

      <section
        id="contact"
        className="container flex flex-col items-center mx-auto gap-28"
      >
        <ContactForm />
      </section>
    </>
  )
}
