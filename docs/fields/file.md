---
sidebar_position: 4
---

# File

## Interface

```typescript
interface FileData extends FieldData {
  emptyLabel?: string;
  preventClear?: boolean;
  allowedFileTypes?: string[];
  forbiddenFileTypes?: string[];
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
<a href="/docs/types/upload-method">UploadMethod</a>&emsp;
