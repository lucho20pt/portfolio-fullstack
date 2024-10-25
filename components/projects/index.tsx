import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'

const PROJECTS: ProjectsProps[] = [
  {
    title: 'Dynamic Web Experiences',
    description: 'Leveraging HTML5 and JavaScript for Modern Web Solutions',
    image: '/anf-1.png',
  },
  {
    // title: 'Advanced Web Applications',
    title: 'I’m very flexible with time zone communications',
    description: 'Building Scalable Apps with Next.js, TypeScript, and Sanity',
    // image: '/parallel-1.png',
    globe: true,
  },
  {
    title: 'Responsive Design Mastery',
    description:
      'Creating Mobile-First Websites with HTML5 and CSS3, Sass, Bootstrap, and Tailwind',
    image: '/continente-1.png',
  },
  {
    title: 'Content Management Excellence',
    description: 'Utilizing WordPress and PHP for Efficient Working Experience',
    image: '/parallel-1.png',
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Developing Secure and Efficient Online Stores with HTML5, JavaScript, and PHP',
    image: '/quinta-3.png',
  },
  {
    title: 'Headless CMS Integration',
    description: 'Experience with Strapi and Sanity',
    image: '/portfolio-1.png',
  },
]

export interface ProjectsProps {
  title: string
  description?: string
  image?: string
  globe?: boolean
}

export const Projects = (): React.JSX.Element => {
  const projects = PROJECTS
  const getClassName = (index: number): string => {
    const groupIndex = Math.floor(index / 8)
    const positionInGroup = index % 4
    return (positionInGroup === 1 || positionInGroup === 2) &&
      groupIndex % 2 === 0
      ? 'md:col-span-2'
      : ''
  }

  const intro: string = 'Powered with next.js 15 & sanity as CMS'

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center max-w-7xl"
    >
      <h1 className="text-xl md:text-3xl font-extralight uppercase md:px-10 mb-10 text-slate-400 text-center">
        {intro}
      </h1>
      <BentoGrid>
        {projects.map(({ title, description, image, globe }, index) => (
          <BentoGridItem
            key={index}
            className={getClassName(index)}
            title={title}
            description={description}
            image={image}
            globe={globe}
          />
        ))}
      </BentoGrid>
    </section>
  )
}
