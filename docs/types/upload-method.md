# UploadMethod

```typescript
interface UploadMethod {
  /**
   * Unique upload method identification
   */
  id: string;

  /**
   * Label shown in Mat Tab selection
   */
  label: string;

  /**
   * Example: '<jms-e-file-manage-select></jms-e-file-manager-select>'
   */
  component: string;

  /**
   * Custom injected configuration
   */
  configuration?: any;
}
```
