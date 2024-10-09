import React from 'react'
import { WorkExperience } from '@/components/about/work-experiences'

export const About = () => {
  return (
    <section id="about" className='flex flex-col gap-5'>
      {/* <h1 className="text-4xl md:text-6xl font-bold my-4 text-center">
        About
      </h1> */}
      <WorkExperience />
      <WorkExperience />
    </section>
  )
}
