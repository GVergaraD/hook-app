import { PropTypes } from "prop-types";
const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li
        key={todo.id}
        className="list-group-item d-flex justify-content-between"
      >
        <span
          className={`align-self-center ${
            todo.done ? "text-decoration-line-through" : ""
          }`}
          onClick={() => onToggleTodo(todo.id)}
          aria-label="span"
        >
          {todo.description}
        </span>
        <button
          className="btn btn-danger"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Borrar
        </button>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default TodoItem;
