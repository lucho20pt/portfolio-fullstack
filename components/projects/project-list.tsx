import React from 'react'
import { Project } from '@/components/projects/project'

export const ProjectsList = () => {
  return (
    <section id="projects" className="flex flex-col items-center justify-center text-center gap-10">
      <header className="container">
        <h2 className="text-xl md:text-3xl font-extralight uppercase md:px-10 text-slate-400 max-w-3xl mx-auto">
          Some of my Work
        </h2>
      </header>
      <div className="flex flex-row flex-wrap items-center justify-center gap-8 md:gap-10 w-full">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  )
}
