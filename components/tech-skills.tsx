'use client'
import React from 'react'
import { AnimatedTooltip, Item } from '@/components/ui/animated-tooltip'

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
        <h2 className="text-xl md:text-3xl font-extralight uppercase md:px-10 mb-5 text-slate-400 text-center">
          {intro}
        </h2>
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
