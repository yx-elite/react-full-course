import { useState } from "react";
import "../style.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter">
        <h1 className="counter-text">{count}</h1>
      </div>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;
