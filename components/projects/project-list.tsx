import React from 'react'
import { Project, ProjectProps } from '@/components/projects/project'
import { HeadingPrimary } from '@/components/ui/headings'

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
  console.log(projectsData)
  const { intro, project } = projectsData
  // console.log(intro);
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center text-center gap-10"
    >
      <HeadingPrimary>{intro}</HeadingPrimary>

      <div className="flex flex-row flex-wrap items-center justify-center gap-8 md:gap-10 w-full">
        {project && project.length > 0 ? (
          project.map((project) => <Project key={project._key} {...project} />)
        ) : (
          <p>{project ? 'No projects found' : 'loading...'}</p>
        )}
      </div>
    </section>
  )
}
