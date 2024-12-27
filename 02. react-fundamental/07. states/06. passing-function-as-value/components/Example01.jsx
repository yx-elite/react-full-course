import { useState } from "react";

const Example01 = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 0;
    return initialCount;
  });
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Example01