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
          { type: 'hero' },
          { type: 'techSkills' },
          // Add more component types as needed
        ],
      },
    ],
    preview: {
      select: {
        title: 'title.current',
      },
    },
  };