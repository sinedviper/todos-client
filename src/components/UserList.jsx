import React from "react";
import { useSelector } from "react-redux";

export const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <h1>Users</h1>
      {users.length}
    </div>
  );
};
