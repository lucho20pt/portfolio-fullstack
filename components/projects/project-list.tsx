import React from 'react'
import { Project, ProjectProps } from '@/components/projects/project'
import { HeadingPrimary } from '@/components/ui/headings'
import { urlFor } from '@/app/utils/sanityImage'

export type ProjectListProps = {
  _type: 'projectsList'
  intro?: string
  project?: Array<
    {
      _key: string
    } & ProjectProps
  >
}

export const ProjectsList = ({
  projectsData,
}: {
  projectsData: ProjectListProps
}) => {
  const { intro, project } = projectsData
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center text-center gap-10"
    >
      <HeadingPrimary>{intro}</HeadingPrimary>

      <div className="flex flex-row flex-wrap items-center justify-center gap-12 md:gap-16 w-full">
        {project && project.length > 0 ? (
          project.map((item) => (
            <Project
              key={item._key}
              id={item._key}
              title={item.title}
              description={item.description}
              tech={item.tech}
              imageLink={
                item.brandImage?.asset
                  ? urlFor(item.brandImage.asset._ref).width(150).url()
                  : ''
              }
            />
          ))
        ) : (
          <p>{project ? 'No projects found' : 'loading...'}</p>
        )}
      </div>
    </section>
  )
}
