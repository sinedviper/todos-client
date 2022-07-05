import React from "react";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const { list: todos, status, error } = useSelector((state) => state.todos);

  return (
    <div className="Todos">
      <h1>TodoList</h1>
      <p>
        Todos: {todos.length}. Status: {status}
      </p>
      <p>{error && <h4>{error}</h4>}</p>
    </div>
  );
};
