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

      <div className="container flex flex-col items-center mx-auto gap-28">
        <section id="contact" className="flex flex-col gap-28 w-full max-w-3xl">
          <ContactForm />
        </section>
      </div>
    </>
  )
}
