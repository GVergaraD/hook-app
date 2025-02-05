import { useEffect } from 'react'
import { useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

// const initialState = [
//   //   {
//   //     id: new Date().getTime(),
//   //     description: "Recolectar la piedra del alma",
//   //     done: false,
//   //   },
//   //   {
//   //     id: new Date().getTime() * 3,
//   //     description: "Recolectar la piedra del tiempo",
//   //     done: false,
//   //   },
// ];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  // const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  const todosCount = () => {
    return todos.length;
  };

  const pendingTodosCount = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  };
};