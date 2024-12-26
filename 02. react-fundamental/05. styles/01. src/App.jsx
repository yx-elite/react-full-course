// -----------------------
// ------ Example 1 ------
// -----------------------

// inline styles
const App1 = () => {
  return (
    <div style={{ color: "red", backgroundColor: "blue", padding: "10px" }}>
      Inline Styles
    </div>
  );
};

// -----------------------
// ------ Example 2 ------
// -----------------------

// Inline styles
const App2 = () => {
  const styles = {
    color: "red",
    backgroundColor: "blue",
    padding: "10px",
  };
  return <div style={styles}>Inline Styles</div>;
};

// -----------------------
// ------ Example 3 ------
// -----------------------

// Separate styles
import "./index.css";

const App3 = () => {
  return <h1>Separate Styles</h1>;
};

// -----------------------
// ------ Example 4 ------
// -----------------------

// Use imported icons
import { FaReact } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <FaReact />
      Icons
    </div>
  );
};

export default App;
