import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export type Service = {
  title: string
  description: string
  imageUrl?: string
}
export type ServicesProps = {
  intro: string
  service: Service[]
}

export const Services = ({
  servicesData,
}: {
  servicesData: ServicesProps | null
}): React.JSX.Element => {
  if (!servicesData) {
    return <p>{'loading...'}</p>
  }

  const { intro, service } = servicesData

  return (
    <section
      id="services"
      className="container flex flex-col items-center justify-center text-center"
    >
      <header className="mb-12">
        <h2 className="text-xl md:text-3xl font-extralight uppercase md:px-10 text-slate-400 max-w-3xl">
          {intro}
        </h2>
      </header>

      {service && (
        <ul className="flex flex-row items-center justify-center flex-wrap gap-6 lg:gap-10">
          {service.map((item, index) => (
            <li
              key={index}
              className={`flex flex-col w-full lg:w-1/3 xl:w-1/4 items-center justify-center py-2 px-6 lg:p-6 flex-wrap
                max-w-[320px]
              rounded-xl border-2 border-secondary/80 ${inter.className}`}
              // [&_*]:min-h-24"
            >
              <h3 className={`flex items-end text-xl lg:text-2xl min-h-24 uppercase`}>
                {item.title}
              </h3>

              <hr className="flex w-full my-4 border-secondary/90" />

              <p className="flex items-start min-h-28 font-extralight">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
