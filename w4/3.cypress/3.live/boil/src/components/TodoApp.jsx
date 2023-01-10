import React, { useState } from "react";
import axios from "axios";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useEffect } from "react";

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    let resp = await axios.post("http://localhost:4004/todos", {
      value: value,
      isCompleted: true,
    });
    setTodos([...todos, resp.data]);
    setValue("");
  };

  useEffect(() => {
    axios.get("http://localhost:4004/todos").then((r) => {
      setTodos(r.data);
    });
  }, []);
  return (
    <div>
      <h3>TodoApp</h3>
      <TodoInput
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
