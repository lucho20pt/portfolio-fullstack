import {defineType, defineField} from 'sanity'

export const techSkill = defineType({
  name: 'techSkill',
  title: 'Tech Skill',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'skill',
      title: 'Skill',
      type: 'string',
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
    }),
  ],
})

export const techSkillList = defineType({
  name: 'techSkillList',
  title: 'Tech Skills List',
  type: 'object',
  fields: [
    defineField({
      name: 'intro',
      title: 'Intro Title',
      type: 'string',
    }),
    defineField({
      name: 'subintro',
      title: 'Sub Intro Title',
      type: 'string',
    }),
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'techSkill'}],
    },
  ],
  preview: {
    prepare: (value: Record<string, any>): {title: string; subtitle: string} => {
      return {
        title: techSkillList.title || '',
        subtitle: 'list of skills',
      }
    },
  },
})
