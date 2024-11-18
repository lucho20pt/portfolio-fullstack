import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ButtonSecondary } from '@/components/ui/tailwindcss-buttons'
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
  title: string
  description: Array<{
    _key: string
    children: Array<{
      _key: string
      text: string
    }>
  }>
  imageLink: string
  tech: Array<{
    skill: string
    image: {
      asset: {
        _ref: string
      }
    }
  }>
}

export const Project = ({
  className,
  title,
  description,
  imageLink,
  tech,
}: ProjectProps) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Image
          title="logo"
          height={30}
          width={30}
          alt="logo"
          className="object-cover !m-0 !p-0 object-top relative transition duration-500"
          src={imageLink}
        />
      </CardHeader>
      <CardContent className="min-h-32 overflow-hidden">
        {description.map((block) =>
          block.children.map((child) => (
            <CardDescription key={child._key}>{child.text}</CardDescription>
          ))
        )}
      </CardContent>
      <CardFooter>
        <ul className="flex flex-row items-center gap-3">
          {tech.map((techItem) => (
            <li key={techItem.skill}>
              <Image
                title={techItem.skill}
                height={10}
                width={10}
                alt={techItem.skill}
                className="object-cover !m-0 !p-0 object-top relative transition duration-500"
                src={imageLink}
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
      </CardFooter>
    </Card>
  )
}
