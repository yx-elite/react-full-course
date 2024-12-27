import { useState } from "react";

const Switcher = () => {
  const [switcher, setSwitcher] = useState(false);
  return (
    <div>
      {switcher ? (
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            borderRadius: "7px",
          }}
        >
          Dark Mode
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "lightgray",
            color: "black",
            padding: "10px",
            borderRadius: "7px",
          }}
        >
          Light Mode
        </div>
      )}
      <br />
      <input type="text" key={switcher ? "dark" : "light"} />
      <button onClick={() => setSwitcher(!switcher)}>Switch</button>
    </div>
  );
};

export default Switcher;
