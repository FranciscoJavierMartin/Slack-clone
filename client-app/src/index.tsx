import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.render(
  <React.Fragment>
    <ToastContainer position='bottom-right' />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
