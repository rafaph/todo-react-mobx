import {IStores} from '../types/todo';
import TodoStore from '../stores/TodoStore';

export default function createStores() : IStores {
  return {
    todoStore: new TodoStore()
  };
}
