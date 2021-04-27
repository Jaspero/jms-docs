export const INTERFACES_MODULE = {
  id: 'interfaces',
  name: 'Interfaces',
  description: 'Schema Forms Interfaces',
  layout: {
    editTitleKey: 'name',
    instance: {
      segments: [
        {
          fields: ['/id', '/name', '/code']
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
      code: {
        type: 'string'
      }
    }
  },
  definitions: {
    id: {
      label: 'ID',
      disableOn: 'edit'
    },
    name: {
      label: 'Name'
    },
    code: {
      label: 'Code',
      component: {
        type: 'monaco',
        configuration: {
          options: {
            language: 'typescript',
            theme: 'vs-dark'
          }
        }
      }
    }
  }
};
