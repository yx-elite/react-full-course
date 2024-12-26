// -----------------------
// ------ Example 1 ------
// -----------------------

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const PasswordChecker = ({ isValid }) => {
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

const App1 = () => {
  return (
    <div>
      <PasswordChecker isValid={true} />
    </div>
  );
};

// ------ Example 2 ------
// -----------------------

const App = () => {
  const items = [
    "Earphone",
    "Headphone",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Speaker",
  ];
  return (
    <div>
      <h1>Cart</h1>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default App;
