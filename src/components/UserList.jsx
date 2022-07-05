import React from "react";
import { useSelector } from "react-redux";

export const UserList = () => {
  const { list: users, status, error } = useSelector((state) => state.users);

  return (
    <div className="Users">
      <h1>Users</h1>
      <p>
        Users: {users.length}. Status: {status}
      </p>
      <p>{error && <h4>{error}</h4>}</p>
    </div>
  );
};
