import React, { useState } from "react";
import { TodoStoreImpl } from "./TodoStore";
import { observer } from "mobx-react";

interface TodoListProps {
  todoStore: TodoStoreImpl;
}

export const TodoList = observer(({ todoStore }: TodoListProps) => {
  const [value, setValue] = useState("");
  const [removeId, setRemoveId] = useState("");

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          if (value) {
            todoStore.addTodo(value);
            setValue("");
          }
        }}
      >
        submit
      </button>

      <br />

      <ul>
        {todoStore.todos.map((todo: any) => {
          return (
            <li
              key={todo.id}
              onClick={() => {
                todoStore.toggleTodo(todo.id);
              }}
            >
              [{todo.completed ? "x" : " "}] {todo.title} id: {todo.id}
            </li>
          );
        })}
      </ul>

      <div>
        <input
          type="text"
          value={removeId}
          onChange={(e) => setRemoveId(e.target.value)}
        />
        <button
          onClick={() => {
            todoStore.removeTodo(parseFloat(removeId));
            setRemoveId("");
          }}
        >
          Remove item by Id
        </button>
      </div>
    </div>
  );
});
