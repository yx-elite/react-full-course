// useReducer hook is an alternative to useState hook for managing state in a more complex application.

import { useReducer, useState } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "incrementByAmount":
      return { ...state, count: state.count + action.payload };
    case "decrementByAmount":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch({ type: "incrementByAmount", payload: Number(amount) })
          }
        >
          Increment by Amount
        </button>
        <button
          onClick={() =>
            dispatch({ type: "decrementByAmount", payload: Number(amount) })
          }
        >
          Decrement by Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
