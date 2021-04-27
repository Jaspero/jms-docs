export const FIELDS_MODULE = {
  id: 'fields',
  name: 'Fields',
  description: 'Schema Forms Fields',
  layout: {
    editTitleKey: 'name',
    instance: {
      segments: [
        {
          fields: ['/id', '/name']
        }
      ]
    },
    table: {
      hideImport: true,
      tableColumns: [
        {
          key: '/name',
          label: 'Name'
        }
      ],
      actions: [
        {
          value: `item => '<jms-e-link link="/m/fields/{{item.id}}/metadata/single/data" icon="description">Metadata</jms-e-link>'`
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
      }
    }
  },
  definitions: {
    id: {
      label: 'ID'
    },
    name: {
      label: 'Name'
    }
  }
};
