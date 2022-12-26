import React, { useState } from "react";
type TodoInputProp = {
  onAdd: Function;
};
const TodoInput = ({ onAdd }: TodoInputProp) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        disabled={!value}
        onClick={() => {
          if (value) {
            onAdd(value);
            setValue("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
