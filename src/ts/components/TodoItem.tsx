import * as React from 'react';
import {observer} from 'mobx-react';
import {ITodoItemProps, ITodoItemState} from '../types/todo';

const ENTER_KEY: number = 13;
const ESC_KEY: number = 27;

@observer
class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {

  public refs: {
    editText: HTMLInputElement;
  };

  public constructor() {
    super();
    this.state = {
      editing: false
    };
  }

  private onDestroy = (): void => {
    this.props.todoStore.remove(this.props.todo);
  };

  private onToggle = (): void => {
    this.props.todo.toggle();
  };

  private onEditTodo = (): void => {
    this.setState({
      editing: true
    });
  };

  private saveTodo = (): void => {
    const value = this.refs.editText.value.trim();
    if (value !== '') {
      this.props.todo.updateText(this.refs.editText.value);
    }
    this.setState({
      editing: false
    });
  };

  private onBlurEditing = (): void => {
    if (this.state.editing) {
      this.saveTodo();
    }
  };

  private onKeyDownEditing = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.which === ENTER_KEY) {
      this.saveTodo();
    } else if (event.which === ESC_KEY) {
      this.setState({
        editing: false
      });
    }
  };

  private componentDidUpdate(): void {
    if (this.state.editing) {
      this.refs.editText.value = this.props.todo.text;
      this.refs.editText.focus();
    }
  }

  public render(): JSX.Element {
    const {todo} = this.props;
    return (
      <li className={this.state.editing ? 'editing' : todo.completed ? 'completed': ''}>
        <div className="view">
          <input type="checkbox" className="toggle" checked={todo.completed} onChange={this.onToggle}/>
          <label onDoubleClick={this.onEditTodo}>{todo.text}</label>
          <button className="destroy" onClick={this.onDestroy}></button>
        </div>
        <input className="edit"
               ref="editText"
               defaultValue={todo.text}
               onBlur={this.onBlurEditing}
               onKeyDown={this.onKeyDownEditing}/>
      </li>
    )
  }
}

export default TodoItem;
