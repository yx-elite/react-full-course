function App() {
  return (
    <User
      img="https://avatars.githubusercontent.com/u/111104248?v=4"
      name="yx-elite"
      age={24}
      hobbies={["coding", "reading", "traveling"]}
    />
  );
}

export default App;

// -----------------------
// ------ Example 1 ------
// -----------------------

// Prop without destructuring
const User = (props) => {
  return (
    <div>
      <img src={props.img} alt="yx-elite" width={200} />
      <h1>Name: {props.name}</h1>


      <h2>Age: {props.age}</h2>
      <h3>Hobbies: {props.hobbies.join(", ")}</h3>
    </div>
  );
};

// Prop with destructuring
const User1 = ({ img, name, age, hobbies }) => {
  return (
    <div>
      <img src={img} alt="yx-elite" width={200} />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Hobbies: {hobbies.join(", ")}</h3>
    </div>
  );
};
