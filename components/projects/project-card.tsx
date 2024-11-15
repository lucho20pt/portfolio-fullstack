import React from 'react'
import Image from 'next/image'

export const ProjectCard = ({
  className,
  title,
  // description,
  imageLink,
  children,
}: {
  className?: string
  title: string
  // description: string
  imageLink: string
  children: React.ReactNode
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
            height={50}
            width={50}
            alt="logo"
            className="object-cover !m-0 !p-0 object-top relative transition duration-500 h-8"
            src={imageLink}
          />
        </span>
      </header>

      {/* <div className="bg-secondary/5 p-4 rounded-md text-left border-t border-secondary/50 text-slate-300">
        <p>{description}</p>
      </div> */}

      {children}

      <footer className="flex flex-row items-center justify-between px-4 gap-5">
        {/* Tech stack and View More button */}
      </footer>
    </article>
  )
}
