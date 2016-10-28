import * as React from 'react';
import {observer} from 'mobx-react';
import TodoItem from './TodoItem';
import {ITodoMainProps} from '../types/todo';
import TodoModel from '../models/TodoModel';

@observer
class TodoMain extends React.Component<ITodoMainProps, {}> {
  private onToggleAll = (event: React.MouseEvent<HTMLInputElement>): void => {
    this.props.todoStore.setCompletedForAll(event.currentTarget.checked);
  };

  private getTodos(): TodoModel[] {
    switch (this.props.location.pathname) {
      case '/completed':
        return this.props.todoStore.completedTodos;
      case '/active':
        return this.props.todoStore.activeTodos;
      default:
        return this.props.todoStore.todos;
    }
  }

  public render(): JSX.Element {
    const todos: TodoModel[] = this.getTodos();
    const {todoStore} = this.props;
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" onChange={this.onToggleAll}/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((todo: TodoModel, index: number): JSX.Element => (
            <TodoItem todoStore={todoStore} todo={todo} key={index}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoMain;
