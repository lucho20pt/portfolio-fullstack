// components/projects/ProjectDetail.tsx

import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/app/utils/sanityImage'
import { ProjectProps } from '@/components/projects/project'

export type ProjectDetailProps = ProjectProps

export const ProjectDetail = ({ project }: { project: ProjectDetailProps }) => {
  const { title, description, tech, brandImage } = project

  return (
    <div className="flex flex-col items-start">
      <h1>{title}</h1>
      {brandImage?.asset && (
        <Image
          src={urlFor(brandImage.asset._ref).width(500).url()}
          alt={title}
          width={500}
          height={300}
        />
      )}
      <div className="project-description">
        {description.map((block) =>
          block.children.map((child) => <p key={child._key}>{child.text}</p>)
        )}
      </div>
      <ul className="project-tech">
        {tech.map((techItem) => (
          <li key={techItem.skill}>
            {techItem.image.asset && (
              <Image
                src={urlFor(techItem.image.asset._ref).width(30).url()}
                alt={techItem.skill}
                width={30}
                height={30}
              />
            )}
            <span>{techItem.skill}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
