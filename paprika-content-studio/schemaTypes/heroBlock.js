export default {
    name: 'heroBlock',
    type: 'object',
    title: 'Hero Block',
    fields: [
      { name: 'title', type: 'string' },
      { name: 'subtitle', type: 'string' },
      {
        name: 'leftText',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'rightText',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'images',
        type: 'array',
        of: [{ type: 'image' }],
        validation: Rule => Rule.length(2)
      }
    ]
  }
  