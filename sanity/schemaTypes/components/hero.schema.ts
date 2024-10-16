export const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  options: {
    collapsible: true,
    editModal: 'fullscreen',
  },
  fields: [
    {
      name: 'intro',
      title: 'Intro',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    // Add more fields as needed
  ],
  preview: {
    select: {
      subtitle: 'heading.0.children.0.text',
    },
    prepare: (value: Record<string, any>) => {
      const {subtitle} = value
      return {
        title: hero.title,
        subtitle: subtitle || '',
      }
    },
  },
}
