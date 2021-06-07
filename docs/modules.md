---
sidebar_position: 2
---

# Modules

A module represents a <a href="https://firebase.google.com/docs/firestore/data-model#collections" target="_blank">collection</a> in the database.

It consists of three configurations:
- <a href="/docs/schema">Schema</a>
- <a href="/docs/layout">Layout</a>
- <a href="/docs/definitions">Definitions</a>

Modules are a basic building blocks of JMS.
They are written as JavaScript Objects and reside in `setup` directory.

Any change to setup and it's modules requires a **redeploy to Firestore**, which is achieved by running:
```shell
cd setup
ts-node setup.ts
```

## Interface

```typescript
interface Module {
  id: string;
  createdOn: number;
  name: string;
  order: number;
  description: string;
  schema: JSONSchema;
  layout?: ModuleLayout;
  definitions?: ModuleDefinitions;
  authorization?: ModuleAuthorization;
  metadata?: ModuleMetadata;
  subCollectionPath?: string;
  collectionGroup?: boolean;
}
```

<a href="https://json-schema.org/understanding-json-schema/" target="_blank">JSONSchema</a>&emsp;
<a href="/docs/layout">ModuleLayout</a>&emsp;
<a href="/docs/definitions">ModuleDefinitions</a>&emsp;
