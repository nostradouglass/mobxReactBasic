import React from "react";
import { observer } from "mobx-react";
import { UserStoreImpl } from "./UserStore";

interface CreateUserProps {
  userStore: UserStoreImpl;
}

export const ListUsers = observer(({ userStore }: CreateUserProps) => {
  return (
    <div>
      <ul>
        {userStore.users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
});
