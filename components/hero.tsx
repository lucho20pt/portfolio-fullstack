'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import { GridDotBackground } from '@/components/ui/grind-dot-background'
import { ButtonPrimary } from '@/components/ui/tailwindcss-buttons'

const inter = Inter({ subsets: ['latin'] })

// HeroProps interface
export interface HeroProps {
  intro?: string
  button?: { title: string; link: string }
  heading: { type: string; children: { text: string; marks?: string[] }[] }[]
  description?: {
    type: string
    children: { text: string; marks?: string[] }[]
  }[]
}

export const Hero = ({
  heroData,
}: {
  heroData: HeroProps | null
}): React.JSX.Element => {
  if (!heroData) {
    return <p>{'loading...'}</p>
  }

  const { intro, heading, description, button } = heroData

  return (
    <GridDotBackground className="dark:bg-grid-white/[0.15] bg-grid-black/[0.15]">
      <section
        className={`${inter.className} antialiased h-[80vh] md:h-[60vh] container max-w-5xl
        flex flex-col items-center justify-center text-center gap-6`}
      >
        <p className="text-xs md:text-sm font-extralight uppercase">{intro}</p>
        {heading.map((headingItem, index) => (
          <h1
            key={index}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold"
          >
            {headingItem.children.map((child, childIndex) => (
              <span
                key={childIndex}
                className={
                  child.marks?.includes('strong') ? 'text-secondary' : undefined
                }
              >
                {child.text}
              </span>
            ))}
          </h1>
        ))}
        {description &&
          description.map((descriptionItem, index) => (
            <p key={index} className="text-xl sm:text-2xl max-w-2xl">
              {descriptionItem.children.map((child, childIndex) => (
                <span
                  key={childIndex}
                  className={
                    child.marks?.includes('strong')
                      ? 'text-secondary'
                      : undefined
                  }
                >
                  {child.text}
                </span>
              ))}
            </p>
          ))}

        {button && (
          <ButtonPrimary
            className="text-xl"
            href={button.link}
            aria-label={button.title}
          >
            {button.title}
          </ButtonPrimary>
        )}
      </section>
    </GridDotBackground>
  )
}
