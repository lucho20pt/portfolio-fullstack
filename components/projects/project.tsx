import Image from 'next/image'
import React from 'react'
import { ButtonSecondary } from '@/components/ui/tailwindcss-buttons'

export const Project = () => {
  return (
    <article
      className="flex flex-col items-center justify-center p-4 h-auto md:w-5/12 gap-6 border-t
      rounded-md bg-secondary/5 hover:bg-secondary/10 text-white [&>*]:w-full"
    >
      <header
        className="flex flex-row items-center justify-between h-20 p-4 rounded-md gap-5
      bg-secondary/10 
      border-t border-secondary/50"
      >
        <h3 className="lg:text-lg font-bold text-slate-400">Quinta dos Carvalhais</h3>
        <span className="">
          <Image
            title="logo"
            height={30}
            width={30}
            alt="logo"
            className="object-cover !m-0 !p-0 object-top relative transition duration-500 w-28 lg:w-32"
            src="/logo-quinta-white.svg"
            // src={urlFor(item.image).width(200).url()}
          />
        </span>
      </header>

      <div className="bg-secondary/5 p-4 rounded-md text-left border-t border-secondary/50 text-slate-300">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          nostrum natus ipsa porro culpa quia quae sit ex corporis. Ducimus.
        </p>
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
              // src={urlFor(item.image).width(200).url()}
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
              // src={urlFor(item.image).width(200).url()}
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
