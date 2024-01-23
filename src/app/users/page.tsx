import React from "react";

import { getUsers } from "@/lib/actions";

const UsersPage = async () => {
  const users = await getUsers();
  return (
    <div className="container">
      <h2 className="text-center text-2xl">Users </h2>
      <ul>
        {users.map((userObj) => (
          <li className="grid grid-cols-3" key={userObj.id}>
            <p>{userObj.id}</p>
            <p>{userObj.email}</p>
            <p>{userObj.password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
