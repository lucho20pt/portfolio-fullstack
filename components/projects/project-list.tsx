import React from 'react'
import { Project } from '@/components/projects/project'
import { HeadingPrimary } from '@/components/ui/headings'

export const ProjectsList = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center text-center gap-10"
    >
      <HeadingPrimary>Some of my Work</HeadingPrimary>

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
