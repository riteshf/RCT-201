### Getting Started

- Initialize a Node Project
- Install `redux`
- Install `nodemon` as devDependency.
- In package.json, add
  - `"type": "module"`
  - add start script

### Task

1. Create a TODO App using redux

```ts
type Todo = {
  id: number;
  content: string;
  isCompleted: false;
};
```

2. This app should support folling actions:
   - Add
   - Update Status
   - Delete
3. create folling for the same.
   - actionTypes
   - actions
   - reducer
   - store
