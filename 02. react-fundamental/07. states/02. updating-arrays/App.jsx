import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState(["John", "Doe", "Jane", "Smith"]);

  const addUser = () => {
    setUsers([...users, "YX-elite"]);
  };
  const removeUser = () => {
    setUsers(users.filter((user) => user !== "John"));
  };
  const updateUser = () => {
    setUsers(users.map((user) => (user === "John" ? "YX-elite" : user)));
  };

  return (
    <div>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
      <button onClick={addUser}>Add User</button>
      <button onClick={removeUser}>Remove User</button>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default App;
