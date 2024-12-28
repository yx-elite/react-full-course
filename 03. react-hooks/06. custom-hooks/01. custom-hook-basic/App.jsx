import useFetch from "./useFetch";

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  console.log(data);

  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <ul key={item.id}>
              <li>{item.id}</li>
              <li>{item.title}</li>
            </ul>
          );
        })}
    </div>
  );
};

export default App;
