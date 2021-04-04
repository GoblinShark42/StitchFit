import React from 'react';
import { render } from 'react-dom';
// import App from './App';
import Album from './Album';


render(
  <div className = 'outer-container'>
    <Album />
  </div>,
  document.getElementById('root'),
);
