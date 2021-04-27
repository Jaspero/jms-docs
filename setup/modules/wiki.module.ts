export const WIKI_MODULE = {
  id: 'wiki',
  name: 'Wiki',
  description: 'Wikis',
  layout: {
    editTitleKey: 'name',
    instance: {
      segments: [
        {
          fields: ['/id', '/name', '/content']
        }
      ]
    },
    table: {
      hideImport: true,
      tableColumns: [
        {
          key: '/id',
          label: 'ID'
        },
        {
          key: '/name',
          label: 'Name'
        }
      ]
    }
  },
  schema: {
    properties: {
      id: {
        type: 'string'
      },
      name: {
        type: 'string'
      },
      content: {
        type: 'string'
      }
    }
  },
  definitions: {
    id: {
      label: 'ID'
    },
    name: {
      label: 'Name'
    },
    content: {
      label: 'Content',
      component: {
        type: 'monaco',
        configuration: {
          options: {
            language: 'markdown',
            theme: 'vs-dark',
          },
        }
      }
    }
  }
};
