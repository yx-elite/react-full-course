import { useState } from "react";
import useCounter from "../hooks/useCounter";

const CounterComponent = () => {
  const {
    count,
    increment,
    decrement,
    reset,
    incrementByAmount,
    decrementByAmount,
  } = useCounter();
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={() => incrementByAmount(amount)}>
        Increment By Amount
      </button>
      <button onClick={() => decrementByAmount(amount)}>
        Decrement By Amount
      </button>
    </div>
  );
};

export default CounterComponent;
