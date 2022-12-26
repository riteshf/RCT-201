import React, { useState } from "react";

const Counter = () => {
  const [countx, setCountX] = useState(0);

  return (
    <div>
      Counter
      <h3 data-testid="count-value">{countx}</h3>
      <div>
        <button
          data-testid="minus-button"
          onClick={() => setCountX(countx - 1)}
        >
          -
        </button>
        <button data-testid="plus-button" onClick={() => setCountX(countx + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
