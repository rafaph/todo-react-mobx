import TodoStore from '../stores/TodoStore';
import TodoModel from '../models/TodoModel';

export interface IStores {
  todoStore: TodoStore
}

export interface ITodoAppProps {
  todoStore: TodoStore;
  location: Location;
}

export interface ITodoItemProps {
  todo: TodoModel,
  todoStore: TodoStore
}

export interface ITodoItemState {
  editing: boolean
}

export interface ITodoFooterProps {
  todoStore: TodoStore
}

export interface ITodoHeaderProps {
  todoStore: TodoStore
}

export interface ITodoMainProps {
  todoStore: TodoStore;
  location: Location;
}
