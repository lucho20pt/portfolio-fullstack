import { Highlights } from '@/components/about/highlights'

const WORK_EXPERIENCE = [
  {
    title: 'Working Experience with Companies since 2009',
    description: [
      <>
        I’ve been doing{' '}
        <span className="text-secondary">
          Front-Office development since 2009
        </span>{' '}
        and have worked on several international brands like Waitrose, Olay,
        L’Oréal Professional, MaxFactor, Eurostar, Betclic, LaCaixa, and some
        Portuguese brands such as Banco Best, Continente, NOS, and Quinta dos
        Carvalhais.
      </>,
      <>
        I started my career at{' '}
        <span className="text-secondary">FullSix Portugal</span> in 2009 and
        then worked for <span className="text-secondary">AGAP2</span>,{' '}
        <span className="text-secondary">International</span>, and{' '}
        <span className="text-secondary">PRIMESOFT</span> (where I worked with{' '}
        <span className="text-secondary">VILT</span> and{' '}
        <span className="text-secondary">InnoWave</span>) companies.
      </>,
      <>
        In 2014, I joined{' '}
        <span className="text-secondary">Havas Worldwide Digital</span> as a{' '}
        <span className="text-secondary">Senior Front-End Developer</span>, with
        major experience in HTML5, CSS, SCSS, JavaScript, jQuery, Bootstrap and
        responsive pages.
      </>,
      <>
        Later on, I evolved into{' '}
        <span className="text-secondary">Back-End Development</span> with PHP,
        MySQL, and WordPress, enabling me to develop Full Stack Projects.
      </>,
      <>
        In the last couple of years at Havas, I also took on{' '}
        <span className="text-secondary">Project Management</span> and{' '}
        <span className="text-secondary">Team Leader Roles</span> within the
        development team.
      </>,
    ],
  },
]

export const WorkExperience = () => {
  const { title, description } = WORK_EXPERIENCE[0]
  return <Highlights title={title} description={description} />
}
