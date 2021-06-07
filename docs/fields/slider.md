---
sidebar_position: 11
---

# Slider

## Interface

```typescript
interface SliderData extends FieldData {
  validation: {
    minimum: number;
    maximum: number;
  };
  thumbLabel: boolean;
  tickInterval: number;
  starAt: number;
  endAt: number;
}
```

<a href="/docs/types/field-data">FieldData</a>
