import 'todomvc-app-css/index.css';
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';
import {Router} from 'react-router';
import {hashHistory} from 'react-router';
import {IStores} from './types/todo';
import createStores from './utils/createStores';
import createRoutes from './utils/createRoutes';

const stores: IStores = createStores();
const routes: JSX.Element = createRoutes();

const wrapper: HTMLElement = document.getElementById('app');

if (wrapper) {
  render(
    <Provider {...stores}>
      <Router history={hashHistory}>
        {routes}
      </Router>
    </Provider>,
    wrapper
  );
} else {
  throw new Error('Unable to find app wrapper element');
}
