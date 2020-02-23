import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>The counter is at : {count} </p>
      <button onClick={() => setCount(count - 1)}>&lt;</button>
      <button onClick={() => setCount(count + 1)}>></button>
      <input type="text" onChange={e => setCount(Number(e.target.value))} />
    </div>
  );
}

export default Counter;
