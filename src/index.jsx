import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Favicon from 'react-favicon'
import fav from '../src/components/images/icone.png'
ReactDOM.render(
  <React.StrictMode>
    <Favicon url={fav} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
