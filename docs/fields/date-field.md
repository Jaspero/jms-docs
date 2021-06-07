---
sidebar_position: 9
---

# DateField

## Interface

```typescript
interface DateData extends FieldData {
  startYear?: number;
  startAt?: number;
  touchUi?: boolean;
  startView?: 'month' | 'year' | 'multi-year';
  format?: 'number' | string;
  stringToDate?: string;
  autocomplete?: string;
  includeTime?: boolean;
  labelHours?: string;
  labelMinutes?: string;
  placeholderHours?: string;
  placeholderMinutes?: string;
}
```

<a href="/docs/types/field-data">FieldData</a>
