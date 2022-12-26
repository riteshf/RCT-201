import React from "react";

const Child = () => {
  console.log("Child is rendered");
  return (
    <div
      style={{
        display: "inline-block",
        margin: "30px",
        padding: "30px",
        border: "1px solid black",
      }}
    >
      <h1>Child</h1>
    </div>
  );
};

export default Child;
