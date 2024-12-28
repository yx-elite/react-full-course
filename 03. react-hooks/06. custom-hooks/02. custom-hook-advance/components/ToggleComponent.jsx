import useToggle from "../hooks/useToggle";

const ToggleComponent = () => {
  const [state, toggle] = useToggle();
  return (
    <div>
      <button onClick={toggle}>{state ? "Hide" : "Show"} Message</button>
      {state && <p>This is a toggled message</p>}
    </div>
  );
};

export default ToggleComponent;
