import {defineField, defineType} from 'sanity'
// import { techSkill } from './tech-skill.schema'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'brandImage',
      title: 'Brand Image',
      type: 'image',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    {
      name: 'tech',
      title: 'Tech used in project',
      type: 'array',
      of: [{type: 'techSkill'}],
    },
  ],
})

export const projectsList = defineType({
  name: 'projectsList',
  title: 'Projects List',
  type: 'object',
  fields: [
    defineField({
      name: 'intro',
      title: 'Intro of Projects List Title',
      type: 'string',
    }),
    {
      name: 'project',
      title: 'Project Title',
      type: 'array',
      of: [{type: 'project'}],
    },
  ],
  preview: {
    select: {
      subtitle: 'intro',
    },
    prepare: (value: Record<string, any>): {title: string; subtitle: string} => {
      const {subtitle} = value
      return {
        title: projectsList.title || '',
        subtitle: subtitle || '',
      }
    },
  },
})
