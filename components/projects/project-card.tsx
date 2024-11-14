import React from 'react'
import Image from 'next/image'
import { ButtonSecondary } from '@/components/ui/tailwindcss-buttons'

export const ProjectCard = ({
  className,
  title,
  description,
  imageLink,
}: {
  className?: string
  title: string
  description: string
  imageLink: string
}) => {
  return (
    <article
      className={`flex flex-col items-center justify-center p-4 h-auto md:w-5/12 gap-6 border-t rounded-md bg-secondary/5 hover:bg-secondary/10 text-white [&>*]:w-full ${className}`}
    >
      <header className="flex flex-row items-center justify-between h-20 p-4 rounded-md gap-4 bg-secondary/10 border-t border-secondary/50">
        <h3 className="lg:text-lg font-bold text-slate-400 text-left">
          {title}
        </h3>
        <span className="text-left">
          <Image
            title="logo"
            height={30}
            width={30}
            alt="logo"
            className="object-cover !m-0 !p-0 object-top relative transition duration-500 w-32"
            src={imageLink}
          />
        </span>
      </header>

      <div className="bg-secondary/5 p-4 rounded-md text-left border-t border-secondary/50 text-slate-300">
        <p>{description}</p>
      </div>

      <footer className="flex flex-row items-center justify-between px-4 gap-5">
        <ul className="flex flex-row items-center gap-3">
          <li>
            <Image
              title="html5"
              height={5}
              width={5}
              alt="html5"
              className="object-cover !m-0 !p-0 object-top relative transition duration-500"
              src="/html5.webp"
            />
          </li>
          <li>
            <Image
              title="html5"
              height={5}
              width={5}
              alt="html5"
              className="object-cover !m-0 !p-0 object-top relative transition duration-500"
              src="/html5.webp"
            />
          </li>
        </ul>
        <ButtonSecondary
          className="text-sm text-secondary hover:text-white hover:bg-indigo-500/50"
          href="/"
          aria-label="title"
        >
          View More
        </ButtonSecondary>
      </footer>
    </article>
  )
}
