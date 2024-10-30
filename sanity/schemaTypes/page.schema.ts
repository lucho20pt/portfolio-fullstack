// page.schema.js
import {Rule} from '@sanity/types'

export const page = {
  name: 'page',
  title: 'Page',
  description: 'Enter a name for the page',
  validation: (rule: Rule) => rule.required(),
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Name',
      type: 'slug',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'components',
      title: 'Components',
      type: 'array',
      of: [
        {type: 'hero'},
        {type: 'techSkillList'},
        {type: 'services'},
        // Add more component types as needed
      ],
    },
    {
      name: 'metadata',
      title: 'Metadata',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Meta Title',
          type: 'string',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'description',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.current',
    },
  },
}

