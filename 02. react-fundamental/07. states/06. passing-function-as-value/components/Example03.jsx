import { useState, useEffect } from "react";

const Example03 = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={() => setName("")}>Clear</button>
    </div>
  );
};

export default Example03;
