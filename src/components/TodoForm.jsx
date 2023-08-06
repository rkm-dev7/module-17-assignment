import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") return;
    addTodo({
      id: new Date().getTime(),
      text: todoText,
      completed: false,
    });
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
