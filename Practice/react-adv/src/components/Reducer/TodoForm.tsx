import { FormEvent, useReducer, useState } from "react";
import NewTodo from "./NewTodo";

export type Todo = {
  id: number;
  name: string;
  complete: boolean;
};

export type Action = { type: string; payload: string | number };

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  REMOVE_TODO: "remove-todo",
};

function reducer(todos: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [addTodo(action.payload as string), ...todos];
    case ACTIONS.TOGGLE_TODO:
      return toggleTodo(todos, Number(action.payload));
    case ACTIONS.REMOVE_TODO:
      return removeTodo(todos, Number(action.payload));
    default:
      return todos;
  }
}

function addTodo(name: string): Todo {
  return { id: Date.now(), name, complete: false };
}

function removeTodo(todos: Todo[], id: number): Todo[] {
  return todos.filter((todo) => todo.id !== id);
}

function toggleTodo(todos: Todo[], id: number): Todo[] {
  return todos.map((todo) => {
    if (todo.id === id) return { ...todo, complete: !todo.complete };
    return todo;
  });
}

function TodoForm() {
  const [name, setName] = useState<string>("");

  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: name });
      setName("");
    }
  };

  console.log(todos);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Todo</button>
      {todos.map((todo) => {
        return <NewTodo todo={todo} dispatch={dispatch} />;
      })}
      <div>{/* Todo Here */}</div>
    </form>
  );
}

export default TodoForm;
