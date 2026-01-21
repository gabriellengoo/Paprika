export default {
    name: 'supportSection',
    type: 'object',
    title: 'Support Section',
    fields: [
      { name: 'headline', type: 'string', title: 'Title' },
      {
        name: 'backgroundGraphic',
        type: 'image',
        title: 'Hero Image',
        options: { hotspot: true }
      },
      {
        name: 'detailItems',
        title: 'Details',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'title', type: 'string', title: 'Title' },
              {
                name: 'description',
                type: 'string',
                title: 'Description',
                description: 'Appears to the right of the title in muted grey text.'
              }
            ]
          }
        ]
      }
    ]
  }
  
