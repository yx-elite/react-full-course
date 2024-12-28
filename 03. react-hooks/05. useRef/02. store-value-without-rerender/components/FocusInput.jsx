import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
};

export default FocusInput;
