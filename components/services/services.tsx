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
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10">
          {service.map((item, index) => (
            <li
              key={index}
              className={`flex flex-col w-full items-center justify-center py-1 px-6 lg:p-6 
              max-w-[320px]
              rounded-xl sm:border-2 border-secondary/80 ${inter.className}`}
            >
              <h3
                className={`flex items-end  sm:min-h-24 md:min-h-28 text-xl lg:text-2xl uppercase`}
              >
                {item.title}
              </h3>

              <hr className="flex w-full my-4 border-secondary/90" />

              <p className="flex items-start sm:min-h-24 md:min-h-28 text-sm lg:text-lg font-extralight">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
