import React from 'react';
import App from './App';
import  ReactDOM  from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/App.scss';

ReactDOM.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>  ,
  document.getElementById('root')
);


