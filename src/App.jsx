import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { UserList } from "./components/UserList";
import { TodoList } from "./components/TodoList";

import { loadUsers } from "./store/users/user-action";
import { loadTodos } from "./store/todos/todo-action";
import { NewTodo } from "./components/newTodos";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadTodos());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <h1>Thunk</h1>
      <NewTodo />
      <UserList />
      <TodoList />
    </div>
  );
}

export default App;
