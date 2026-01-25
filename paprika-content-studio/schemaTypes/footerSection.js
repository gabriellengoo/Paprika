export default {
  name: 'footerSection',
  type: 'document',
  title: 'Footer Section',
  fields: [
    {
      name: 'contacts',
      title: 'Contacts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            {
              name: 'url',
              title: 'URL (optional)',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      name: 'podcastName',
      title: 'Podcast Title',
      type: 'string',
    },
    {
      name: 'podcastPlatforms',
      title: 'Podcast Platforms',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote / Tagline',
      type: 'string',
    },
    {
      name: 'copyright',
      title: 'Copyright line',
      type: 'string',
    },
  ],
}
