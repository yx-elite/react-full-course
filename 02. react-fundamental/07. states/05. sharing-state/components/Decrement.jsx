const Decrement = ({ count, onClickHandler }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={onClickHandler}>Decrement</button>
    </div>
  );
};

export default Decrement