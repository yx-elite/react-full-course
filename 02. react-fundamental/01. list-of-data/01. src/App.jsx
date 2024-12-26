// -----------------------
// ------ Example 1 ------
// -----------------------

function App(props) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <h1>Numbers</h1>
      {numbers.map((number) => (
        <ul key={number}>
          <li>{number}</li>
        </ul>
      ))}
    </div>
  );
}

// -----------------------
// ------ Example 2 ------
// -----------------------

const App = () => {
  const usersInfo = [
    {
      name: "John",
      age: 20,
      email: "john@example.com",
    },
    {
      name: "Jane",
      age: 21,
      email: "jane@example.com",
    },
    {
      name: "Doe",
      age: 22,
      email: "doe@example.com",
    },
  ];

  return (
    <div>
      <h1>Users</h1>
      {usersInfo.map((user, index) => (
        <ul key={index}>
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>
        </ul>
      ))}
    </div>
  );
};

export default App;
