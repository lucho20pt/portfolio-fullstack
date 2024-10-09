import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'

const PROJECTS: Projects[] = [
  {
    title: 'Dynamic Web Experiences',
    subtitle: 'Leveraging HTML5 and JavaScript for Modern Web Solutions',
    image: 'path/to/dynamic-web-experiences.jpg',
    size: 'large',
  },
  {
    title: 'Responsive Design Mastery',
    subtitle:
      'Creating Mobile-First Websites with HTML5 and CSS3, Sass, Bootstrap, and Tailwind',
    image: 'path/to/responsive-design-mastery.jpg',
    size: 'small',
  },
  {
    title: 'Content Management Excellence',
    subtitle: 'Utilizing WordPress and PHP for Efficient Working Experience',
    image: 'path/to/content-management-excellence.jpg',
    size: 'small',
  },
  {
    title: 'Advanced Web Applications',
    subtitle: 'Building Scalable Apps with Next.js, TypeScript, and Strapi',
    image: 'path/to/advanced-web-applications.jpg',
    size: 'large',
  },
  {
    title: 'Headless CMS Integration',
    subtitle: 'Experience with Strapi and Sanity',
    image: 'path/to/headless-cms-integration.jpg',
    size: 'small',
  },
  {
    title: 'E-commerce Solutions',
    subtitle:
      'Developing Secure and Efficient Online Stores with HTML5, JavaScript, and PHP',
    image: 'path/to/ecommerce-solutions.jpg',
    size: 'large',
  },
]

export interface Projects {
  title: string
  subtitle?: string
  image?: string
  size?: 'small' | 'large'
}

interface ProjectsProps {
  projects: Projects[]
}

export const Projects = ({
  projects = PROJECTS,
}: ProjectsProps): JSX.Element => {
  const getClassName = (index: number): string => {
    const groupIndex = Math.floor(index / 8)
    const positionInGroup = index % 4
    return (positionInGroup === 1 || positionInGroup === 2) &&
      groupIndex % 2 === 0
      ? 'md:col-span-2'
      : ''
  }

  return (
    <section id="projects">
      {/* <h2 className="text-4xl md:text-6xl font-bold my-4 text-center">
        Projects
      </h2> */}
      <BentoGrid>
        {projects.map(({ title, subtitle }, index) => (
          <BentoGridItem
            key={index}
            className={getClassName(index)}
            title={title}
            description={subtitle}
          />
        ))}
      </BentoGrid>
    </section>
  )
}
