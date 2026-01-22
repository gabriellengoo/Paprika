export default {
  name: 'heroImagesSideBySide',
  type: 'object',
  title: 'Hero Images (Side by Side)',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section Title (optional)',
      description: 'Appears above the image grid on the page.',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images with captions',
      description: 'Add the two images that should appear side by side along with optional supporting text.',
      of: [
        {
          type: 'object',
          title: 'Image entry',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Text that appears beneath the image on the website.',
            },
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'image',
            },
            prepare(selection) {
              return {
                title: selection.title || 'Hero image',
                media: selection.media,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(2).max(2),
    },
  ],
}
