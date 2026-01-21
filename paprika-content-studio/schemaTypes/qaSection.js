export default {
  name: 'qaSection',
  type: 'object',
  title: 'Q&A Section',
  fields: [
    {
      name: 'entries',
      type: 'array',
      title: 'Entries',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'eyebrow', type: 'string', title: 'Eyebrow Label' },
            { name: 'headline', type: 'string', title: 'Headline' },
            {
              name: 'body',
              type: 'array',
              of: [{ type: 'block' }],
              title: 'Body',
            },
          ],
        },
      ],
    },
  ],
}
