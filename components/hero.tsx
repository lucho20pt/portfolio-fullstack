'use client'
import { Inter } from 'next/font/google'
import { GridDotBackground } from './ui/grind-dot-background'

const inter = Inter({ subsets: ['latin'] })

export const Hero = () => {
  return (
    <GridDotBackground>
      <section
        className={`${inter.className} antialiased py-24 container max-w-5xl
        flex flex-col items-center text-center gap-5`}
      >
        <p className="text-xs md:text-sm font-extralight uppercase">
          Dynamic Web Magic with Next.js
        </p>
        <h1 className="text-4xl md:text-6xl font-bold">
          Developing Seamless User Experiences in Web{' '}
          <span className="text-secondary">Front-End Development</span>
        </h1>
        <h2 className="text-lg md:text-xl">
          Hi! I’m <span className="text-secondary">Daniel Batista</span>, an
          experient Front-End Developer based in Portugal
        </h2>
      </section>
    </GridDotBackground>
  )
}
