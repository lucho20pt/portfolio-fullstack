'use client'
import { Inter } from 'next/font/google'
import { GridDotBackground } from '@/components/ui/grind-dot-background'
import { ButtonPrimary } from '@/components/ui/tailwindcss-buttons'

const inter = Inter({ subsets: ['latin'] })

// HeroProps
export interface HeroProps {
  intro?: string
  heading: { type: 'block'; children: { text: string }[] }[]
  description?: { type: 'block'; children: { text: string }[] }[]
}

export const Hero = ({ heroData }: { heroData: HeroProps }): JSX.Element => {
  const { intro, heading, description } = heroData
  return (
    <GridDotBackground>
      <section
        className={`${inter.className} antialiased py-24 container max-w-5xl
        flex flex-col items-center text-center gap-6`}
      >
        <p className="text-xs md:text-sm font-extralight uppercase">{intro}</p>
        {heading.map((headingItem, index) => (
          <h1 key={index} className="text-4xl md:text-6xl font-bold">
            {headingItem.children.map((child, childIndex) => (
              <span key={childIndex}>{child.text}</span>
            ))}
          </h1>
        ))}
        {description &&
          description.map((descriptionItem, index) => (
            <h2 key={index} className="text-lg md:text-xl">
              {descriptionItem.children.map((child, childIndex) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </h2>
          ))}
        <ButtonPrimary className="text-xl" href="#about">
          Read More
        </ButtonPrimary>
      </section>
    </GridDotBackground>
  )
}
