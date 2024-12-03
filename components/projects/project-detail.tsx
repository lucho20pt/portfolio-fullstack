// components/projects/ProjectDetail.tsx

import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/app/utils/sanityImage'
import { ProjectProps } from '@/components/projects/project'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/card'

export type ProjectDetailProps = ProjectProps

export const ProjectDetail = ({ project }: { project: ProjectDetailProps }) => {
  const { title, description, tech, brandImage } = project
  // console.log(project)

  return (
    <Card className="flex md:w-full max-w-6xl border-0 mt-10 sm:mt-20 p-5 sm-p-10 gap-12 bg-secondary/0 hover:bg-secondary/0">
      <CardHeader className="p-5 sm:p-10 h-auto bg-secondary/20">
        <CardTitle className="text-lg sm:text-4xl">{title}</CardTitle>
        {brandImage?.asset && (
          <Image
            title="logo"
            height={100}
            width={160}
            alt="logo"
            className="object-cover !m-0 !p-0 object-top relative transition duration-500 w-24 sm:w-40"
            src={urlFor(brandImage.asset._ref).width(160).url()}
          />
        )}
      </CardHeader>

      <CardContent className="flex flex-col-reverse sm:flex-row items-center justify-between min-h-auto overflow-hidden p-0 bg-secondary/10">
        <div className="flex flex-col items-start p-10">
          {description.map((block) =>
            block.children.map((child) => (
              <CardDescription key={child._key} className="text-lg sm:text-xl">
                {child.text}
              </CardDescription>
            ))
          )}
        </div>
        
        <div className="flex flex-col items-end sm:min-w-[40%]">
          <Image
            height={150}
            width={400}
            alt="website"
            className="object-cover !m-0 !p-0 object-top relative transition duration-500"
            src="/quinta-3.png"
          />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-center p-5 w-auto">
        <ul className="flex flex-row flex-wrap items-center justify-center gap-5">
          {tech.map((techItem) => (
            <li key={techItem.skill} className="overflow-hidden">
              {techItem.image.asset && (
                <Image
                  title={techItem.skill}
                  height={40}
                  width={40}
                  alt={techItem.skill}
                  className="object-cover !m-0 !p-0 object-top relative transition duration-500 h-8"
                  src={urlFor(techItem.image.asset._ref).width(40).url()}
                />
              )}
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  )
}
