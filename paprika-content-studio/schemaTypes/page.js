export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
      {
        name: 'title',
        type: 'string'
      },
      {
        name: 'slug',
        type: 'slug',
        options: { source: 'title' }
      },
      {
        name: 'modules',
        type: 'array',
        title: 'Sections',
        of: [
          { type: 'headerSection' },
          { type: 'heroBlock' },
          { type: 'editorialText' },
          { type: 'heroImagesSideBySide' },
          { type: 'teamSection' },
          { type: 'supportSection' },
          { type: 'qaSection' },
          { type: 'closingSection' }
        ]
      }
    ]
  }
  
