// components/projects/Project.tsx

import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ButtonSecondary } from '@/components/ui/tailwindcss-buttons'
import { urlFor } from '@/app/utils/sanityImage'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/card'

export type ProjectProps = {
  className?: string
  id: string
  title: string
  description: Array<{
    _key: string
    children: Array<{
      _key: string
      text: string
    }>
  }>
  brandImage?: {
    asset?: {
      _ref: string
    }
  }
  tech: Array<{
    skill: string
    image: {
      asset?: {
        _ref: string
      }
    }
  }>
  imageLink?: string
}

export const Project = ({
  className,
  id,
  title,
  description,
  tech,
  imageLink,
}: ProjectProps) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className="sm:text-xl">{title}</CardTitle>
        {imageLink && (
          <Image
            title="logo"
            height={75}
            width={150}
            alt="logo"
            className="object-cover !m-0 !p-0 object-top relative transition duration-500 max-h-12 sm:max-h-14"
            src={imageLink}
          />
        )}
      </CardHeader>
      <CardContent className="min-h-32 overflow-hidden bg-transparent border-0 shadow-none">
        {description.map((block) =>
          block.children.map((child) => (
            <CardDescription key={child._key}>{child.text}</CardDescription>
          ))
        )}
      </CardContent>
      <CardFooter className='shadow-none'>
        <ul className="flex flex-row flex-wrap items-center gap-3 max-w-[50%] sm:max-w-full">
          {tech.map((techItem) => (
            <li key={techItem.skill} className="overflow-hidden">
              {techItem.image.asset && (
                <Image
                  title={techItem.skill}
                  height={30}
                  width={30}
                  alt={techItem.skill}
                  className="object-contain !m-0 !p-0 object-top relative transition duration-500 max-h-5 w-5"
                  src={urlFor(techItem.image.asset._ref).width(30).url()}
                />
              )}
            </li>
          ))}
        </ul>
        <ButtonSecondary
          className="text-sm text-secondary hover:text-white hover:bg-indigo-500/50"
          aria-label="View More"
          href={`/projects/${id}`}
        >
          View Detail
        </ButtonSecondary>
      </CardFooter>
    </Card>
  )
}
