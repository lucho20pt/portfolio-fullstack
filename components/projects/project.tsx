import React from 'react'
import Image from 'next/image'
import { ProjectCard } from '@/components/projects/project-card'
import { ButtonSecondary } from '@/components/ui/tailwindcss-buttons'

export type ProjectProps = {
  title: string
  // shortDescription: string
  description: Array<{
    _key: string
    children: Array<{
      _key: string
      text: string
    }>
  }>
  tech: Array<{
    skill: string
    image: {
      asset: {
        _ref: string
      }
    }
  }>
  brandImage: {
    asset: {
      _ref: string
    }
  }
}

export const Project = ({
  title,
  // shortDescription,
  description,
  tech,
  // brandImage,
}: ProjectProps) => {
  return (
    <ProjectCard
      title={title}
      // description={shortDescription}
      // imageLink={`/path/to/images/${brandImage.asset._ref}`}
      imageLink={`/html5.webp`}
    >
      <div className="bg-secondary/5 p-4 rounded-md text-left border-t border-secondary/50 text-slate-300">
        {description.map((block) =>
          block.children.map((child) => <p key={child._key}>{child.text}</p>)
        )}
      </div>

      <footer className="flex flex-row items-center justify-between px-4 gap-5">
        <ul className="flex flex-row items-center gap-3">
          {tech.map((techItem) => (
            <li key={techItem.skill}>
              <Image
                title={techItem.skill}
                height={10}
                width={10}
                alt={techItem.skill}
                className="object-cover !m-0 !p-0 object-top relative transition duration-500"
                // src={`/path/to/images/${techItem.image.asset._ref}`}
                src={`/html5.webp`}
              />
            </li>
          ))}
        </ul>
        <ButtonSecondary
          className="text-sm text-secondary hover:text-white hover:bg-indigo-500/50"
          href="/"
          aria-label="View More"
        >
          View More
        </ButtonSecondary>
      </footer>
    </ProjectCard>
  )
}
