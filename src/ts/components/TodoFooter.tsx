import * as React from "react";
import {Link, IndexLink} from "react-router";
import {observer} from "mobx-react";
import {ITodoFooterProps} from "../types/todo";

@observer
class TodoFooter extends React.Component<ITodoFooterProps, {}> {
  private onClearCompleted = (): void => {
    this.props.todoStore.clearCompleted();
  };

  public render(): JSX.Element {
    const {todoStore} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{todoStore.activeTodos.length}</strong> item left</span>
        <ul className="filters">
          <li>
            <IndexLink activeClassName="selected" to="/">All</IndexLink>
          </li>
          <li>
            <Link activeClassName="selected" to="/active">Active</Link>
          </li>
          <li>
            <Link activeClassName="selected" to="/completed">Completed</Link>
          </li>
        </ul>
        <button className="clear-completed" onClick={this.onClearCompleted}>Clear completed</button>
      </footer>
    );
  }
}
export default TodoFooter;
