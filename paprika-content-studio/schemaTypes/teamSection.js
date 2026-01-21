export default {
    name: 'teamSection',
    type: 'object',
    title: 'Team Section',
    fields: [
      {
        name: 'members',
        type: 'array',
        of: [{
          type: 'object',
          fields: [
            { name: 'name', type: 'string' },
            { name: 'role', type: 'string' },
            { name: 'photo', type: 'image' }
          ]
        }]
      }
    ]
  }
  