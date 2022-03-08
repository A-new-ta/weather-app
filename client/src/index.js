import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Context from './context/context';


ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById('root')
);

