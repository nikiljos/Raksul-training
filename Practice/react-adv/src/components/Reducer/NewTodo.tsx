import { Action, ACTIONS, Todo } from "./TodoForm";

type Props = {
  todo: Todo;
  dispatch: React.Dispatch<Action>;
};

function NewTodo({ todo, dispatch }: Props) {
  return (
    <>
      <p style={{ color: todo.complete ? "red" : "white" }}>{todo.name}</p>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo.id });
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.REMOVE_TODO, payload: todo.id });
        }}
      >
        Remove
      </button>
    </>
  );
}

export default NewTodo;
