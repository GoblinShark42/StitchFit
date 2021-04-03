import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <div className = 'outer-container'>
    <App />
  </div>,
  document.getElementById('root'),
);
