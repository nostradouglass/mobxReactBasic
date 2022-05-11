import { makeObservable, observable, action } from "mobx";

interface User {
  id: number;
  name: string;
  age: number;
}

export class UserStoreImpl {
  users: User[] = [];

  constructor() {
    makeObservable(this, {
      users: observable,
      addUser: action
    })
  }

  addUser(name: string, age: number) {
    let user = {
      id: Math.random(),
      name,
      age
    }
    this.users.push(user)
  }

}

export const UserStore = new UserStoreImpl();
