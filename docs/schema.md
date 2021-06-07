---
sidebar_position: 3
---

# Schema

JMS is developed to work with Document-Based databases.

Each <a href="/docs/modules">Module</a> requires a typed schema for defining document structure.
Similarly like Typescript Interface, schema defines properties and its types in a document.

For more info on writing JSON schema check <a href="https://json-schema.org/" target="_blank">here</a>.

## Example

```json
{
    "properties": {
        "username": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "age": {
            "type": "number"
        },
        "nicknames": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    }
}
```

Schema above corresponds to following object:

```json
{
    "username": "MichaelScott",
    "email": "example@example.com",
    "age": 35,
    "nicknames": ["Mike", "Mikey", "Mac"]
}
```
