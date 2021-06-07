---
sidebar_position: 4
---

# Layout

Layout defines the arrangement of visual elements on a page. It configures how the schema is displayed in the overview and form segments.

## Interface

```typescript
interface ModuleLayout {
  editTitleKey?: string;
  order?: number;

  /**
   * ID of a document in the collection.
   * If added the dashboard link navigates
   * directly to the provided id.
   */
  directLink?: string;
  sort?: {
    active: string;
    direction: 'desc' | 'asc';
  };
  pageSize?: number;
  table?: ModuleLayoutTable;
  sortModule?: SortModule;
  filterModule?: FilterModule;
  importModule?: ImportModule;
  searchModule?: SearchModule;
  instance?: ModuleInstance;
  overview?: ModuleOverview;
  icon?: string;
}
```

## Properties

### editTitleKey
Display selected key in Toolbar after text "Editing"

Default value: `id`

### directLink
If set to `true` stays on same page after clicking `Save`.
If provided the ID of a document in the collection page will navigate to it after 'Save'.

Default value: `false`

### pageSize
Number of documents loaded in table on initial load.

Default value: `10`

### icon
In case document `settings/layout` is missing `navigation` property, all of the modules provided are listed in sidebar. Provide icon for module using this property.

Default value: `folder_open`

### instance
In instance you define the layout of the *single document* page.

#### Interface

```typescript
interface ModuleInstance {

  /**
   * Receives the final results from the form
   * and any returned mutated value will be saved
   * into database document.
   * (data: any) => any;
   */
  formatOnSave?: string;
  formatOnCreate?: string;
  formatOnEdit?: string;

  /**
   * (form: FormGroup) => void;
   */
  formatOnLoad?: string;
  segments: Segment[];
}
```

