import Greetings from "./components/Greetings";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

function App() {
  return (
    <div>
      <h1>Conditional Rendering in React</h1>

      {/* Weather component */}
      <Weather temperature={10} />
      <Weather temperature={20} />
      <Weather temperature={30} />

      {/* UserStatus component */}
      <UserStatus isLoggedIn={true} isAdmin={true} />
      <UserStatus isLoggedIn={true} isAdmin={false} />
      <UserStatus isLoggedIn={false} isAdmin={false} />

      {/* Greeting component */}
      <Greetings timeOfDay="morning" />
      <Greetings timeOfDay="afternoon" />
      <Greetings />
    </div>
  );
}

export default App;
