'use client'
import React from 'react'
import { AnimatedTooltip, Item } from '@/components/ui/animated-tooltip'
import { HeadingPrimary } from '@/components/ui/headings'

export type TechSkillsProps = {
  _key: string
  intro?: string
  subintro?: string
  skills: Item[]
}

export const TechSkills = ({
  techSkillData,
}: {
  techSkillData: TechSkillsProps | null
}): React.JSX.Element => {
  if (!techSkillData) {
    return <p>{'loading...'}</p>
  }

  const { intro, subintro, skills } = techSkillData
  // console.log(techSkillData)

  return (
    <section
      id="stack"
      className="flex flex-col items-center justify-center max-w-5xl"
    >
      <header>
        <HeadingPrimary className='pb-5'>{intro}</HeadingPrimary>

        {subintro && (
          <p className="text-sm md:text-sm font-normal md:px-10 mb-10 text-slate-400 text-center">
            {subintro}
          </p>
        )}
      </header>
      <AnimatedTooltip items={skills} />
    </section>
  )
}
