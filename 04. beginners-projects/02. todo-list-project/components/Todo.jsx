import { useState } from "react";
import "../style.css";

function generateId() {
  return Math.floor(Math.random() * 10);
}

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, { id: generateId(), text: input }]);
    setInput("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Submit</button>

      {todos.length > 0 && (
        <div className="todos-container">
          <ul className="todos-list">
            {todos.map(({ id, text }) => (
              <li key={id} className="todo">
                <span>{text}</span>
                <button className="close" onClick={() => handleDeleteTodo(id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Todo;
