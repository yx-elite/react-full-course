// 1. Create context to store the data
// 2. Create provider to provide the data
// 3. Use consumer to get the data

import { createContext } from "react";
import ComponentA from "./components/ComponentA";

export const DataContext = createContext();
export const Data2Context = createContext();

const App = () => {
  const name = "yx-elite";
  const age = 24;

  return (
    <div>
      <DataContext.Provider value={name}>
        <Data2Context.Provider value={age}>
          <ComponentA />
        </Data2Context.Provider>
      </DataContext.Provider>
    </div>
  );
};

export default App;
