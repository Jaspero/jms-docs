---
sidebar_position: 5
---

# Image

## Interface

```typescript
interface ImageData extends FieldData {
  preventServerUpload?: boolean;
  preventUrlUpload?: boolean;
  preventStorageUpload?: boolean;
  generatedImages?: GeneratedImage[];
  allowedImageTypes?: string[];
  forbiddenImageTypes?: string[];
  minSize?: string | number;
  maxSize?: string | number;
  /**
   * Overwrite existing file if already exists
   */
  preserveFileName?: boolean;
  uploadMethods?: UploadMethod[];
}
```

<a href="/docs/types/field-data">FieldData</a>&emsp;
<a href="/docs/types/generated-image">GeneratedImage</a>&emsp;
<a href="/docs/types/upload-method">UploadMethod</a>&emsp;
