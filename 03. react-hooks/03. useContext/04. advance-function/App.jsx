import UserProvider from "./UserContext";
import Userprofile from "./components/Userprofile";
import UpdateUser from "./components/UpdateUser";

const App = () => {
  return (
    <div>
      <UserProvider>
        <Userprofile />
        <UpdateUser />
      </UserProvider>
    </div>
  );
};

export default App;
