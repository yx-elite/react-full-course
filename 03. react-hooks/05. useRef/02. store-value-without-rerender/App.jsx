// 1. useRef is used to directly reference a DOM element and manipulate it, such as focusing an input field, scrolling, or measuring dimensions.
// 2. useRef is ideal for storing data that doesn't need to trigger a re-render when updated, such as timers, counters, or caching values.
// 3. If you need a value to persist across renders but don't want changes to it to trigger re-renders (unlike state), use useRef.
// 4. In some cases, useRef can store functions or objects that you don't want to re-create on every render.
// 5. Using state can sometimes lead to unnecessary re-renders. If you need to store data but don't want to trigger a re-render, useRef is a lightweight alternative.

import FocusInput from "./components/FocusInput";
import Timer from "./components/Timer";

const App = () => {
  return (
    <div>
      <FocusInput />
      <Timer />
    </div>
  );
};

export default App;
