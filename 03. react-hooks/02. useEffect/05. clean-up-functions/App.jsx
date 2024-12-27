// Clean up subscriptions
// Clean up modals
// Remove event listeners
// Clear timeouts

import { useState, useEffect } from "react";

const App = () => {
  const [size, setSize] = useState(window.innerWidth);

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up function
    return () => {
      console.log("Clean up function");
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div>
      <h1>Window</h1>
      <h2>{size}px</h2>
    </div>
  );
};

export default App;
