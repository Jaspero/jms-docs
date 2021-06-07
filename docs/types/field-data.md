# FieldData

```typescript
interface FieldData <T = FormControl> {

  /**
   * Is the field rendered as part of a form
   * or in standalone "single" mode
   */
  single: boolean;
  pointers: Pointers;
  form: FormGroup;
  control: T;
  label: string;
  columnsDesktop?: number;
  columnsMobile?: number;
  columnsTablet?: number;
  hint?: string;
  placeholder?: string;
  class?: string;
}
```

<a href="/docs/types/pointers">Pointers</a>
