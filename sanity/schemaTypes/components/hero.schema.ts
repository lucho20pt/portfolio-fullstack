//hero.schema.ts
export const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'intro',
      title: 'Intro',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
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
}
