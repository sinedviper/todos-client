import React from "react";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const { list: todos, status, error } = useSelector((state) => state.todos);

  return (
    <div>
      <h1>TodoList</h1>
      Todos: {todos.length}. Status: {status}
      {error && <h4>{error}</h4>}
    </div>
  );
};
