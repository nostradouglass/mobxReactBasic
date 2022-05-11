import React from "react";
import { TodoList } from "./TodoList/TodoList";
import { TodoStore } from "./TodoList/TodoStore";
import { CreateUser } from "./User/CreateUser";
import { ListUsers } from "./User/ListUsers";
import { UserStore } from "./User/UserStore";

function App() {
  return (
    <div>
      <header>
        <h3>Test</h3>
        <TodoList todoStore={TodoStore} />
        <br />
        <CreateUser userStore={UserStore} />
        <ListUsers userStore={UserStore} />
      </header>
    </div>
  );
}

export default App;
