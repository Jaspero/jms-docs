---
sidebar_position: 1
---

# Input

## Interface

```typescript
interface InputData extends FieldData {
    /**
     * @default 'text'
     */
    type?: 'text' | 'number' | 'email';

    /**
     * HTML autocomplete attribute
     * @default 'on'
     */
    autocomplete?: string;

    suffix?: HSD | string;
    prefix?: HSD | string;
}
```

<a href="/docs/types/field-data">FieldData</a>&emsp;
<a href="/docs/types/hsd">HSD</a>&emsp;
