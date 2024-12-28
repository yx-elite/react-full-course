import useFetch from "../hooks/useFetch";

const FetchComponent = () => {
  const [data, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map((post) => (
        <ul key={post.id}>
          <li>{post.title}</li>
          <li>{post.body}</li>
        </ul>
      ))}
    </div>
  );
};

export default FetchComponent;
