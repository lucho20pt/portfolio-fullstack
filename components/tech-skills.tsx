'use client'
import { AnimatedTooltip, Item } from '@/components/ui/animated-tooltip'

const TECH_ICONS: Item[] = [
  {
    id: 1,
    name: 'HTML5',
    designation: 'Markup Language',
    image: '/icons/ico_html5.png',
  },
  {
    id: 2,
    name: 'CSS3',
    designation: 'Style Sheet Language',
    image: '/icons/ico_css3.png',
  },
  {
    id: 3,
    name: 'Sass',
    designation: 'CSS Preprocessor',
    image: '/icons/ico_scss.png',
  },
  {
    id: 4,
    name: 'JavaScript',
    designation: 'Programming Language',
    image: '/icons/ico_js.png',
  },
  {
    id: 5,
    name: 'jQuery',
    designation: 'JavaScript Library',
    image: '/icons/ico_jquery.png',
  },
  {
    id: 6,
    name: 'TypeScript',
    designation: 'Typed JavaScript',
    image: '/icons/ico_ts.png',
  },
  {
    id: 7,
    name: 'Bootstrap',
    designation: 'CSS Framework',
    image: '/icons/ico_bs.png',
  },
  {
    id: 8,
    name: 'React',
    designation: 'JavaScript Library',
    image: '/icons/ico_react.png',
  },
  {
    id: 9,
    name: 'Next.js 14',
    designation: 'React Framework',
    image: '/icons/ico_nextjs.png',
  },
  {
    id: 10,
    name: 'Tailwind',
    designation: 'CSS Framework',
    image: '/icons/ico_tailwind.png',
  },
  {
    id: 11,
    name: 'Strapi',
    designation: 'Headless CMS',
    image: '/icons/ico_strapi.png',
  },
  {
    id: 12,
    name: 'WordPress',
    designation: 'CMS',
    image: '/icons/ico_wordpress.png',
  },
  {
    id: 13,
    name: 'MySQL',
    designation: 'Database',
    image: '/icons/ico_mysql.png',
  },
  {
    id: 14,
    name: 'PHP',
    designation: 'Programming Language',
    image: '/icons/ico_php.png',
  },
]

export const TechSkills = (): JSX.Element => {
  return (
    <section className="flex flex-row items-center justify-center max-w-5xl px-4">

        <AnimatedTooltip
          items={TECH_ICONS}
        />

    </section>
  )
}