export default {
  name: 'headerSection',
  type: 'object',
  title: 'Header Section',
  fields: [
    { name: 'logo', type: 'string', title: 'Logo Text' },
    {
      name: 'navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'url', type: 'url', title: 'URL' },
          ],
        },
      ],
    },
    {
      name: 'cta',
      type: 'object',
      fields: [
        { name: 'label', type: 'string', title: 'Label' },
        { name: 'url', type: 'url', title: 'URL' },
      ],
    },
    {
      name: 'preOrderCta',
      title: 'Pre-order CTA',
      type: 'object',
      fields: [
        { name: 'label', type: 'string', title: 'Label' },
        { name: 'url', type: 'url', title: 'URL' },
      ],
    },
    { name: 'tagline', type: 'string', title: 'Tagline' },
    { name: 'headline', type: 'string', title: 'Headline' },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{ type: 'block' }],
    },
    {
      name: 'preOrderLabel',
      type: 'string',
      title: 'Pre-order Label',
    },
    {
      name: 'preOrderButton',
      type: 'object',
      fields: [
        { name: 'label', type: 'string', title: 'Label' },
        { name: 'url', type: 'url', title: 'URL' },
      ],
    },
    {
      name: 'infoBlock',
      title: 'Info List',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'featureImages',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'year',
              type: 'string',
              title: 'Year',
              description: 'Optional year to display alongside the caption',
            },
            {
              name: 'link',
              type: 'url',
              title: 'Image Link',
              description: 'Optional URL the image should link to',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    },
  ],
}
