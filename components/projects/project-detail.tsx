import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/app/utils/sanityImage'
import { ProjectProps } from '@/components/projects/project'
import {
  Card,
  CardHeader,
  CardHeading,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/card'
import { ButtonSecondary } from '@/components/ui/tailwindcss-buttons'

export type ProjectDetailProps = ProjectProps

export const ProjectDetail = ({ project }: { project: ProjectDetailProps }) => {
  const { title, description, tech, brandImage } = project
  // console.log(project)

  return (
    <Card className="flex md:w-full lg:max-w-4xl xl:max-w-6xl border-0 mt-10 sm:mt-20 p-5 sm:p-10 mx-4 gap-10 lg:shadow-md lg:shadow-secondary/30 hover:bg-secondary/15">
      <CardHeader className="p-5 sm:p-10 h-auto">
        <CardHeading className="text-lg sm:text-2xl md:text-4xl">
          {title}
        </CardHeading>
        {brandImage?.asset && (
          <Image
            title={title}
            height={100}
            width={160}
            alt={title}
            className="object-cover !m-0 !p-0 object-top relative transition duration-500 max-w-24 sm:max-w-40 max-h-12 sm:max-h-16"
            src={urlFor(brandImage.asset._ref).width(320).url()}
          />
        )}
      </CardHeader>

      <CardContent className="flex flex-col-reverse md:flex-row items-center justify-between min-h-auto p-5 sm:p-10 gap-10 overflow-hidden">
        <div className="flex flex-col items-start p-4 md:w-3/5">
          {description.map((block) =>
            block.children.map((child) => (
              <CardDescription
                key={child._key}
                className="text-lg md:text-xl text-gray-100"
              >
                {child.text}
              </CardDescription>
            ))
          )}
        </div>

        <div className="flex flex-col items-end shadow-md shadow-secondary rounded-sm md:w-2/5">
          <Image
            height={150}
            width={400}
            alt="website"
            aria-label="Project website screenshot"
            className="object-cover !m-0 !p-0 object-top relative transition duration-500"
            src="/quinta-3.png"
          />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col-reverse md:flex-row items-center justify-around p-5 w-auto gap-10 shadow-none">
        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="text-lg text-gray-300">
            <code>know more 🔎</code>
          </h3>

          <div className="flex items-center justify-center gap-5">
            <ButtonSecondary
              className="text-lg"
              aria-label="View GitHub"
              href="https://google.com"
            >
              GitHub
            </ButtonSecondary>
            <ButtonSecondary
              className="text-lg"
              aria-label="View Website"
              href="https://google.com"
            >
              Website
            </ButtonSecondary>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="text-lg text-gray-300">
            <code>developed with 💙</code>
          </h3>
          <ul className="flex flex-row flex-wrap items-center justify-center gap-4">
            {tech.map((techItem) => (
              <li key={techItem.skill} className="flex flex-row items-center justify-center">
                {techItem.image.asset && (
                  <Image
                    title={techItem.skill}
                    height={30}
                    width={30}
                    alt={techItem.skill}
                    aria-label={techItem.skill}
                    className="object-contain !m-0 !p-0 object-top relative transition duration-500 max-h-8 w-8"
                    src={urlFor(techItem.image.asset._ref).width(60).url()}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </CardFooter>
    </Card>
  )
}
