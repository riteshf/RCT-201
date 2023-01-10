import React from "react";

type TodoItemProp = {
  id: number;
  content: string;
  isCompleted: boolean;
};

const TodoItem = ({ id, content, isCompleted }: TodoItemProp) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      <div>
        {content} - {isCompleted ? "Done" : "Not Done"}
      </div>
    </div>
  );
};

export default TodoItem;
