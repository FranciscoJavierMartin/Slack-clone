import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import { DASHBOARD_PAGE_ROUTE, LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE } from './constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Route path={DASHBOARD_PAGE_ROUTE} exact component={Dashboard} />
      <Route path={LOGIN_PAGE_ROUTE} exact component={Login} />
      <Route path={REGISTER_PAGE_ROUTE} exact component={Register} />
    </BrowserRouter>
  );
}

export default App;
