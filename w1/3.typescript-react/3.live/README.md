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
{
  "todos": [
    { "id": 1, "type": "Learned", "message": "useState", "likes": 2 },
    { "id": 2, "type": "Learned", "message": "useEffect", "likes": 3 },
    { "id": 3, "type": "Learning", "message": "useRef", "likes": 0 },
    { "id": 4, "type": "Pending", "message": "useReducer", "likes": 5 },
    { "id": 5, "type": "Revision", "message": "React-101", "likes": 2 },
    { "id": 6, "likes": 0, "message": "redux", "type": "Pending" },
    { "id": 7, "likes": 0, "message": "Typescript", "type": "Learning" }
  ]
}
```

4. Start `json-server` on port: `8080`

```cmd
json-server --watch db.json --port 8080
```

5. Create an `api.ts` file to write all API's in it

6. Write types for everything
