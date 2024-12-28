import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

const UpdateUser = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const { updateUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(newName, newAge);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter New Name"
        />
        <input
          type="number"
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
          placeholder="Enter New Age"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateUser;
