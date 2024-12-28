import useInput from "../hooks/useInput";

const FormComponent = () => {
  const name = useInput();
  const email = useInput();
  const password = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.value, email.value, password.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" {...name} />
        <label htmlFor="email">Email</label>
        <input type="email" {...email} />
        <label htmlFor="password">Password</label>
        <input type="password" {...password} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
