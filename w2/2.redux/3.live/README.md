### Getting Started

1. npm init -y
2. npm i redux
3. npm i nodemon -D
4. Update package.json, add

```json
"type": "module"
```

5. Update package.json, add start script

```json
"start": "nodemon src"
```

6. Create `actionTypes`, `actions`, `reducer`, `store` for

#### Goal

Create a Counter + Todo App that supports following operations:

1. incrementCounter
2. decrementCounter
3. addTodo
4. updateTodo
5. deleteTodo
