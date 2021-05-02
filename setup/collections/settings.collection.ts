export const SETTINGS_COLLECTION = {
  name: 'settings',
  documents: [
    {
      id: 'layout',
      navigation: {
        items: [
          {
            icon: 'dashboard',
            label: 'LAYOUT.DASHBOARD',
            type: 'link',
            value: '/dashboard'
          },
          {
            icon: 'input',
            label: 'LAYOUT.FIELDS',
            type: 'link',
            value: '/m/fields/overview'
          },
          {
            icon: 'book',
            label: 'LAYOUT.INTERFACES',
            type: 'link',
            value: '/m/interfaces/overview'
          },
          {
            icon: 'description',
            label: 'LAYOUT.WIKI',
            type: 'link',
            value: '/m/wiki/overview'
          },
          {
            children: [
              {
                icon: 'supervised_user_circle',
                label: 'GENERAL.USERS',
                type: 'link',
                value: '/m/users'
              },
              {
                icon: 'vpn_key',
                label: 'GENERAL.ROLES',
                type: 'link',
                value: '/m/roles'
              }
            ],
            icon: 'account_box',
            label: 'LAYOUT.MANAGEMENT',
            type: 'expandable'
          },
          {
            children: [
              {
                icon: 'view_module',
                label: 'LAYOUT.MODULES',
                type: 'link',
                value: '/module-definition/overview'
              },
              {
                icon: 'send',
                label: 'LAYOUT.INVITES',
                type: 'link',
                value: '/m/user-invites'
              }
            ],
            icon: 'dns',
            label: 'LAYOUT.SYSTEM',
            type: 'expandable'
          }
        ]
      }
    },
    {
      id: 'docs-layout',
      navigation: {
        items: [
          {
            name: 'Dashboard',
            navigate: '/'
          },
          {
            name: 'Modules',
            navigate: '/wiki/modules'
          },
          {
            name: 'Fields',
            children: [
              {
                name: 'Autocomplete',
                navigate: '/fields/autocomplete'
              },
              {
                name: 'Checkbox',
                navigate: '/fields/checkbox'
              },
              {
                name: 'Chips',
                navigate: '/fields/chips'
              },
              {
                name: 'Date',
                navigate: '/fields/date'
              },
              {
                name: 'Image',
                navigate: '/fields/image'
              },
              {
                name: 'Input',
                navigate: '/fields/input'
              },
              {
                name: 'Select',
                navigate: '/fields/select'
              },
              {
                name: 'Slider',
                navigate: '/fields/slider'
              },
              {
                name: 'Radio',
                navigate: '/fields/radio'
              }
            ]
          },
          {
            name: 'Layout',
            children: [
              {
                name: 'Table',
                navigate: '/wiki/table'
              }
            ]
          }
        ]
      }
    }
  ]
};
