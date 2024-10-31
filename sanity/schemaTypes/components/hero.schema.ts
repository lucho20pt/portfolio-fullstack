import {defineType, defineField} from 'sanity'
import {Rule} from '@sanity/types'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
    // Add more fields as needed
  ],
  preview: {
    select: {
      subtitle: 'heading.0.children.0.text',
    },
    prepare: (value: Record<string, any>): {title: string; subtitle: string} => {
      const {subtitle} = value
      return {
        title: hero.title || '',
        subtitle: subtitle || '',
      }
    },
  },
})
