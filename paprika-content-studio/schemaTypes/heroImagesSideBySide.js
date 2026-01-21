export default {
  name: 'heroImagesSideBySide',
  type: 'object',
  title: 'Hero Images (Side by Side)',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Optional Title'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Exactly 2 Images',
      of: [{ type: 'image' }],
      validation: Rule => Rule.min(2).max(2)
    }
  ]
}
