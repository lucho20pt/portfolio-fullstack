'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { MyGlobe } from '@/components/comunications/myglobe'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto ',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  globe,
}: {
  className?: string
  title: string
  description?: string
  image?: string
  globe?: boolean
}) => {
  return (
    <article
      className={cn(
        'row-span-1 group/bento justify-between flex flex-col rounded-3xl h-64',
        className
      )}
    >
      <ParallaxProvider>
        <div className="overflow-hidden rounded-lg bg-black border-8">
          <header
            className="flex flex-col overflow-hidden z-10 gap-1 p-4 relative 
        dark:bg-gradient-to-b from-black to-black/80"
          >
            <h3 className="text-xl font-bold text-neutral-600 dark:text-secondary">
              {title}
            </h3>
            <p className="text-primary text-sm md:text-lg">{description}</p>
          </header>

          <Parallax speed={10}>
            {image && (
              <Image
                src={image}
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto relative top-[-98px] opacity-90"
              />
            )}
          </Parallax>
          {globe && (
            <MyGlobe className="relative top-[-50%] left-[15%] flex items-center justify-center" />
          )}
        </div>
      </ParallaxProvider>
    </article>
  )
}
