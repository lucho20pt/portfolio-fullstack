'use client'
import React from 'react'
import { AnimatedTooltip, Item } from '@/components/ui/animated-tooltip'

export type TechSkillsProps = {
  _key: string
  intro: string
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

  const { intro, skills } = techSkillData
  // console.log(techSkillData)

  return (
    <section className="flex flex-col items-center justify-center max-w-5xl">
      <h1 className="text-xl md:text-3xl font-extralight uppercase md:px-10 mb-10 text-slate-400 text-center">
        {intro}
      </h1>
      <AnimatedTooltip items={skills} />
    </section>
  )
}
