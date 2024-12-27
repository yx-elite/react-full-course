import { useState } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <Increment count={count} onClickHandler={increment} />
      <Decrement count={count} onClickHandler={decrement} />
      <Reset count={count} onClickHandler={reset} />
    </div>
  );
};

export default App;
