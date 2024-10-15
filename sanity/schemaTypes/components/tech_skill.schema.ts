import {defineType, defineField} from 'sanity'

export const techSkill = defineType({
  name: 'techSkills',
  title: 'Tech Skill',
  type: 'document',
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
      type: 'text',
    }),
  ],
})
