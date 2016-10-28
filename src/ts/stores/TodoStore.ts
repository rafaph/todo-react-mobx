import {observable, computed, action} from 'mobx';
import TodoModel from './../models/TodoModel';

export default class TodoStore {
  @observable todos: TodoModel[] = [];

  @computed get completedTodos(): TodoModel[] {
    return this.todos.filter((todo: TodoModel): boolean => todo.completed);
  }

  @computed get activeTodos(): TodoModel[] {
    return this.todos.filter((todo: TodoModel): boolean => !todo.completed);
  }

  @action setCompletedForAll(completed: boolean): void {
    this.todos.forEach((todo: TodoModel): void => {
      todo.completed = completed;
    });
  }

  @action clearCompleted(): void {
    this.todos = this.todos.filter((todo: TodoModel): boolean => !todo.completed);
  }

  @action add(text: string): void {
    this.todos.push(
      new TodoModel(text)
    );
  }

  @action remove(todo: TodoModel): void {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
