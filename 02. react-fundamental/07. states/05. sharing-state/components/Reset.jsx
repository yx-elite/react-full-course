const Reset = ({ count, onClickHandler }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={onClickHandler}>Reset</button>
    </div>
  );
};

export default Reset