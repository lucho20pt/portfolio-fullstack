import React from 'react'
import { MyGlobe } from '@/components/comunications/myglobe'

export const Comunications = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <header className="container">
        <h2 className="text-xl md:text-3xl font-extralight uppercase md:px-10 text-slate-400 max-w-3xl">
          I’m very flexible with time zone communications
        </h2>
      </header>
      <div
        className="overflow-hidden flex flex-row items-start justify-center
        h-[200px] shadow-secondary shadow-[0px_8px_8px_-8px]"
      >
        <MyGlobe className="w-[400px] h-[400px]" />
      </div>
    </section>
  )
}
