import * as React from 'react';
import {ITodoHeaderProps} from '../types/todo';

const ENTER_KEY: number = 13;

class TodoHeader extends React.Component<ITodoHeaderProps, {}> {
  private onAddTodo = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.which === ENTER_KEY) {
      const value: string = event.currentTarget.value.trim();
      if (value !== '') {
        event.currentTarget.value = '';
        this.props.todoStore.add(value);
      }
    }
  };

  public render(): JSX.Element {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" onKeyPress={this.onAddTodo}/>
      </header>
    );
  }
}

export default TodoHeader;
