export default {
    name: 'editorialText',
    type: 'object',
    title: 'Editorial Text Block',
    fields: [
      { name: 'headline', type: 'string' },
      {
        name: 'centered',
        type: 'boolean',
        title: 'Center Align',
        description: 'Enable to center this editorial block on the page.',
        initialValue: false,
      },
      {
        name: 'headlineBeforeBody',
        type: 'boolean',
        title: 'Muted headline before body',
        description: 'Show the headline directly above the body copy in grey text.',
        initialValue: false,
      },
      {
        name: 'body',
        type: 'array',
        of: [{ type: 'block' }]
      }
    ]
  }
  
