import React from 'react'

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
        <ul className='flex flex-col items-center justify-center gap-10'>
          {service.map((item, index) => (
            <li key={index} className="flex flex-col gap-5">
              <h3 className="text-2xl">{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
