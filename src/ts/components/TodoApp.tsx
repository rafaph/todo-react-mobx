import * as React from 'react';
import {inject} from 'mobx-react';
import {ITodoAppProps} from '../types/todo';
import TodoFooter from './TodoFooter';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';

@inject('todoStore')
class TodoApp extends React.Component<ITodoAppProps, {}> {

  public render(): JSX.Element {
    const {todoStore, location} = this.props;
    return (
      <section className="todoapp">
        <TodoHeader todoStore={todoStore}/>
        <TodoMain todoStore={todoStore} location={location}/>
        <TodoFooter todoStore={todoStore}/>
      </section>
    );
  }
}

export default TodoApp;
