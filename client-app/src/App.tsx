import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound';
import {
  DASHBOARD_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
} from './constants/routes';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={DASHBOARD_PAGE_ROUTE} exact component={Dashboard} />
        <Route path={LOGIN_PAGE_ROUTE} exact component={Login} />
        <Route path={REGISTER_PAGE_ROUTE} exact component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
