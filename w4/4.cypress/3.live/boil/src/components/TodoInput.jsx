import React from "react";

const TodoInput = ({ value, handleChange, handleSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <form onSubmit={submit}>
      <input
        id="todo-input"
        data-testid="todo-input"
        type="text"
        value={value}
        onChange={handleChange}
        autoFocus
      />
      <button data-testid="todo-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
