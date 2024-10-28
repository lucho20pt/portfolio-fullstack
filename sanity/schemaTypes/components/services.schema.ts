import {defineType, defineField} from 'sanity'

export const service = defineType({
    name: 'service',
    title: 'Service',
    type: 'object',
    fields: [
        defineField({
           name: "title",
           title: "Title",
           type: "string"
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string"
        }),
        defineField({
            name: "image",
            title: "ImageUrl",
            type: "image"
        })
    ]
})

export const services = defineType({
    name: 'services',
    title: 'Services',
    type: 'object',
    fields: [
        defineField({
            name: 'intro',
            title: 'Intro',
            type: 'string',
        }),
        {
            name: 'service',
            title: 'Service',
            type: 'array',
            of: [{type: 'service'}]
        }
    ],
    preview: {
        prepare: (value: Record<string, any>): {title: string; subtitle: string} => {
          return {
            title: services.title || '',
            subtitle: 'list of services',
          }
        },
      },
})