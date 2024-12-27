// Use condition in useEffect
// Wrapping hook with conditional statement is not allowed
// Instead, use if statement inside useEffect

import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect is called");
    if (count > 5) {
      document.title = `Count: ${count}`;
    }
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default App;
