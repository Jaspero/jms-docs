---
sidebar_position: 6
---

# Gallery

## Interface

```typescript
interface GalleryData extends FieldData {
  allowUrl?: boolean;
  allowServerUpload?: boolean;
  generatedImages?: GeneratedImage[];
  allowedImageTypes?: string[];
  forbiddenImageTypes?: string[];
  minSize?: string | number;
  maxSize?: string | number;
  /**
   * Overwrite existing file if already exists
   */
  preserveFileName?: boolean;
}
```

<a href="/docs/types/field-data">FieldData</a>&emsp;
<a href="/docs/types/generated-image">GeneratedImage</a>&emsp;
