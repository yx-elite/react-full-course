import { useContext } from "react";
import { DataContext, Data2Context } from "../App";

const ComponentC = () => {
  const userName = useContext(DataContext);
  const userAge = useContext(Data2Context);

  return (
    <div>
      <h1>ComponentC</h1>
      <p>
        Name: {userName} Age: {userAge}
      </p>
    </div>
  );
};

export default ComponentC;
