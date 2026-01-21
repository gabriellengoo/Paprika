export default {
  name: 'closingSection',
  type: 'object',
  title: 'Closing Section',
  fields: [
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      options: { hotspot: true },
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline',
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body Copy',
      of: [{ type: 'block' }],
    },
    {
      name: 'columns',
      title: 'Support Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'heading', type: 'string', title: 'Column Heading' },
            {
              name: 'rows',
              title: 'Rows',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', type: 'string', title: 'Label' },
                    { name: 'value', type: 'string', title: 'Value' },
                  ],
                },
              ],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(2),
    },
    {
      name: 'footerItems',
      title: 'Footer Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'value', type: 'string', title: 'Value' },
          ],
        },
      ],
    },
  ],
}

