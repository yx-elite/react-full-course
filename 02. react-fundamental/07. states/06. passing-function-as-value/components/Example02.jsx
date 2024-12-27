import { useState } from "react";

const Example02 = () => {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100)
  );

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <p>{randomNumber}</p>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  );
};

export default Example02;
