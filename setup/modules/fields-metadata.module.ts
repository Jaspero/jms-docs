export const FIELDS_METADATA_MODULE = {
  id: 'fields~{docId}~metadata',
  name: 'Field Metadata',
  description: 'Schema Forms Field Metadata',
  layout: {
    directLink: true,
    editTitleKey: 'id',
    instance: {
      segments: [
        {
          fields: ['/interface', '/template']
        }
      ]
    },
    table: {
      hideImport: true,
      tableColumns: [
        {
          key: '/id',
          label: 'ID'
        }
      ]
    }
  },
  schema: {
    properties: {
      id: {
        type: 'string'
      },
      interface: {
        type: 'string'
      },
      template: {
        type: 'string'
      }
    }
  },
  definitions: {
    interface: {
      label: 'Interface',
      component: {
        type: 'select',
        configuration: {
          populate: {
            collection: 'interfaces'
          }
        }
      }
    },
    template: {
      label: 'Template',
      component: {
        type: 'monaco',
        configuration: {
          options: {
            language: 'typescript',
            theme: 'vs-dark',
          },
          value: 'import { FormBuilderData } from \'@jaspero/form-builder\';const data: FormBuilderData = {  /*multiLineEditableArea=  schema: {},  layout: {},  definitions: {}*/};'
        }
      }
    }
  }
};
