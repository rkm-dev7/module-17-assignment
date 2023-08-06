import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./redux/actions";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleToggleTodo = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm addTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        toggleTodo={handleToggleTodo}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default App;
