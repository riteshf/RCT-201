import React, { useState } from "react";

import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

type Todo = {
  id: number;
  content: string;
  isCompleted: boolean;
};

const TodoApp = () => {
  console.log("TodoApp");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, content: "hello", isCompleted: false },
    { id: 2, content: "welcome", isCompleted: true },
  ]);

  const onAdd = (content: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        content,
        isCompleted: false,
      },
    ]);
  };
  return (
    <div>
      Todos : {todos.length}
      <div>
        <TodoInput onAdd={onAdd} />
      </div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoApp;
