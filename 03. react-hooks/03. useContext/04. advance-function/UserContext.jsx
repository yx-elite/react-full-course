import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "YX-elite", age: 24 });

  const updateUser = (newName, newAge) => {
    setUser({ name: newName, age: newAge });
  };

  return (
    <div>
      <UserContext.Provider value={{ user, updateUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserProvider;
