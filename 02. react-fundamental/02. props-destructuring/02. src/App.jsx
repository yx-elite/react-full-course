import Person from "./Person";
import Product from "./Product";

function App() {
  return (
    <div>
      {/* Passing props to Person */}
        <Person name="John Doe" age={28} />
        <Person name="Jane Smith" age={32} />
  
        {/* Passing props to Product */}
        <Product name="Laptop" price="$1200" />
        <Product name="Smartphone" price="$699" />
      </div>
    );
  }
  
  export default App;