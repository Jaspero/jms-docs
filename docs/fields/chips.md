---
sidebar_position: 14
---

# Chips

## Interface

```typescript
interface ChipsData extends FieldData {
  selectable: boolean;
  removable: boolean;
  addOnBlur: boolean;
  unique: boolean;
  autocomplete?: string;
  suffix?: HSD | string;
  prefix?: HSD | string;
}
```

<a href="/docs/types/field-data">FieldData</a>&emsp;
<a href="/docs/types/hsd">HSD</a>&emsp;
