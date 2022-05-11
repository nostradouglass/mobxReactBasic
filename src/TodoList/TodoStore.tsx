import { action, makeObservable, observable } from "mobx";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}


export class TodoStoreImpl {
  todos: TodoItem[] = [];
  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      toggleTodo: action,
      removeTodo: action
    });
  }

  addTodo(title: string) {
    const item: TodoItem = {
      id: +Math.random().toFixed(4),
      title,
      completed: false,
    };
    this.todos.push(item);
  }

  toggleTodo(id: number) {
      const index = this.todos.findIndex(item => item.id === id)
      if (index > -1 ) {
          this.todos[index].completed = !this.todos[index].completed
      }
  }
  removeTodo(id: number) {
      const filteredTodos = this.todos.filter(item => item.id !== id)
        this.todos = filteredTodos
  }
}

export const TodoStore = new TodoStoreImpl();
