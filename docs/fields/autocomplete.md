---
sidebar_position: 8
---

# Autocomplete

## Interface

```typescript
interface AutocompleteData extends FieldData {
  dataSet: Array<{name: string; value: any}>;
  populate?: {
    collection: string;
    nameKey: string;
    valueKey?: string;
    orderBy?: string;
    filter?: WhereFilter;
    limit?: number;
  };
  autocomplete?: string;
  suffix?: HSD | string;
  prefix?: HSD | string;
}
```

<a href="/docs/types/field-data">FieldData</a>&emsp;
<a href="/docs/types/where-filter">WhereFilter</a>&emsp;
<a href="/docs/types/hsd">HSD</a>&emsp;
