# Pointer

```typescript
interface Pointer {
  key: string;
  type: SchemaType;
  control: Control;
  validation: any;

  formatOnSave?: (item: any, dataSet?: any) => any;
  formatOnLoad?: (item: any) => any;
  formatOnCreate?: (item: any, dataSet?: any) => any;
  formatOnEdit?: (item: any, dataSet?: any) => any;

  /**
   * Arrays can have these properties
   */
  arrayType?: SchemaType;
  properties?: any;
  required?: string[];
  arrayPointers?: Pointers[];
}
```

<a href="/docs/types/schema-type">SchemaType</a>&emsp;
<a href="/docs/types/pointers">Pointers</a>&emsp;
