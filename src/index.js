import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import store from './redux';
import Blog from './pages/Blog/index';
import NotFound from './pages/NotFound'
import { history } from './redux/reducers';




ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' exact>
          <App />
          </Route>
          <Route  path='/blog'>
              <Blog />
          </Route>
          <Route  path='*'>
            <NotFound />
          </Route>
        </Switch>
         
      </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);

