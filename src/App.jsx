import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { UserList } from "./components/UserList";
import { TodoList } from "./components/TodoList";

import { loadUsers } from "./store/users/user-action";
import { loadTodos } from "./store/todos/todo-action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadTodos());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Thunk</h1>
      <UserList />
      <TodoList />
    </div>
  );
}

export default App;
