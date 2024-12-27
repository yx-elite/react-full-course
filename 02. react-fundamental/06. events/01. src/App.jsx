// -----------------------
// ------ Example 1 ------
// -----------------------

// Click event
const Button = () => {
  const handleClick = () => {
    alert(Math.round(Math.random() * 100));
  };
  return <button onClick={handleClick}>Click me</button>;
};

// -----------------------
// ------ Example 2 ------
// -----------------------

// Copy event
const Copy = () => {
  const copyHandler = () => {
    alert("Copied to clipboard");
  };
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "15px",
        borderRadius: "8px",
        textColor: "black",
      }}
      onCopy={copyHandler}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum animi,
      neque saepe tempora ducimus tenetur quo. Iure in quae itaque aut inventore
      illum quidem ab a totam voluptatem voluptatibus voluptas eligendi culpa,
      vel voluptates omnis libero vero rerum? Sunt accusamus possimus sed fuga?
      Fugit, blanditiis cum aperiam rem cupiditate doloribus velit in veniam non
      nobis consectetur suscipit atque magnam eligendi illum qui. Dignissimos,
      inventore error quibusdam voluptas expedita laborum itaque assumenda
      fugiat odio voluptate non nemo aut veritatis at illum neque laudantium et
      qui dicta quos? Eos ipsam, soluta cumque deserunt neque doloremque esse
      laudantium ex veritatis pariatur ipsa recusandae?
    </div>
  );
};

// -----------------------
// ------ Example 3 ------
// -----------------------

// Mouse event
const Hover = () => {
  const mouseOverHandler = () => {
    alert("Mouse hover through text");
  };

  return (
    <div
      style={{
        backgroundColor: "lightyellow",
        padding: "15px",
        borderRadius: "8px",
        textColor: "black",
      }}
      onMouseOver={mouseOverHandler}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum a
      fugiat quam laborum fuga nobis explicabo hic tempora, aut, libero iste.
      Accusantium laboriosam sapiente esse porro eum molestiae sint expedita
      nisi praesentium eaque a impedit cum nemo, debitis labore dolorem dolorum
      eveniet! Repellat at blanditiis repudiandae. Aspernatur pariatur
      architecto repellendus esse quae voluptatum dolor animi nemo itaque
      dolorum corrupti labore nesciunt, iste veniam deleniti, maiores ullam
      error nulla alias, deserunt eius. Nesciunt quidem laudantium aliquid, nam
      voluptatem deserunt rerum illo expedita ad dignissimos nostrum beatae aut
      totam assumenda doloribus ducimus facere, ipsum quam earum quos magni?
      Voluptas, cupiditate ipsum.
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Button />
      <Copy />
      <Hover />
    </div>
  );
};

export default App;
