### [Typescript with React](https://www.typescriptlang.org/docs/handbook/react.html)

- Typescript can be used with react, using command

```cmd
npx create-react-app lec --template typescript
```

### Topics

- Props
- Children
- Events
- useState with generics
- Synthetic Events and Types
- Axios API response Mapping

## Coding Task

# Create a Todo App with API integration

- TodoInput Component
- TodoItem component

# Tasks

1. `npx create-react-app lec --template typescript`
2. Create Componets

- TodoApp.tsx
- TodoInput.tsx
- TodoItem.tsx

3. create a `db.json` file.

```json
[
  "todos": [
    {"id": 1, "value": "Item 1", "isCompleted": false},
    {"id": 2, "value": "Item 2", "isCompleted": true},
    {"id": 3, "value": "Item 3", "isCompleted": true}
  ]
]
```

4. Start `json-server` on port: `8080`

```cmd
json-server --watch db.json --port 8080
```

5. Create an `api.ts` file to write all API's in it

6. Write types for everything
