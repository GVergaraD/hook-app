import { PropTypes } from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          /* TodoItem */
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
