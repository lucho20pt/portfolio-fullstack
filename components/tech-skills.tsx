'use client'
import { AnimatedTooltip, Item } from '@/components/ui/animated-tooltip'

export type TechSkillsProps = {
  _key: string
  skills: Item[]
}

export const TechSkills = ({
  techSkillData,
}: {
  techSkillData: TechSkillsProps | null
}): JSX.Element => {
  if (!techSkillData) {
    return <p>{'loading...'}</p>
  }

  const { skills } = techSkillData

  return (
    <section className="flex flex-row items-center justify-center">
      <AnimatedTooltip items={skills} />
    </section>
  )
}
