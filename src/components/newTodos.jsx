import React from "react";
import { useDispatch } from "react-redux";

import { createTodo } from "../store/todos/todo-action";

export const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(e.target.title.value));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="NewTodo">
      <input type="text" name="title" placeholder="new todo" />
      <input type="submit" value="Add Todo" />
    </form>
  );
};
