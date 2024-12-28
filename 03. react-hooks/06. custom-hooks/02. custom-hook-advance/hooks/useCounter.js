import { useReducer } from "react";

const reducer = (count, action) => {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "reset":
      return action.initialCount;
    case "incrementByAmount":
      return count + Number(action.amount);
    case "decrementByAmount":
      return count - Number(action.amount);
    default:
      return count;
  }
};

const useCounter = (initialCount = 0) => {
  const [count, dispatch] = useReducer(reducer, initialCount);

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });
  const reset = () => dispatch({ type: "reset", initialCount });
  const incrementByAmount = (amount) =>
    dispatch({ type: "incrementByAmount", amount });
  const decrementByAmount = (amount) =>
    dispatch({ type: "decrementByAmount", amount });

  return { count, increment, decrement, reset, incrementByAmount, decrementByAmount };
};

export default useCounter;
