import * as React from 'react';
import {Route, IndexRoute} from 'react-router';
import TodoApp from '../components/TodoApp';

export default function createRoutes(): JSX.Element {
  return (
    <Route path="/">
      <IndexRoute component={TodoApp}/>
      <Route path="active" component={TodoApp}/>
      <Route path="completed" component={TodoApp}/>
    </Route>
  );
}
