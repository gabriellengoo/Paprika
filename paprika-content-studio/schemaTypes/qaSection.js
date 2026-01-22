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
          title: 'Q&A Entry',
          fields: [
            {
              name: 'eyebrow',
              type: 'string',
              title: 'Eyebrow Label',
              description: 'Optional text that appears above the headline.',
            },
            { name: 'headline', type: 'string', title: 'Headline' },
            {
              name: 'body',
              type: 'array',
              of: [{ type: 'block' }],
              title: 'Body',
              description: 'Rich text that appears below the headline.',
            },
          ],
          preview: {
            select: {
              title: 'headline',
              subtitle: 'eyebrow',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Untitled Q&A entry',
                subtitle: subtitle || 'No eyebrow provided',
              }
            },
          },
        },
      ],
    },
  ],
}
