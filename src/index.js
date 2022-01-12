import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { JokesProvider } from './context';
import './index.css';
import App from './App';

ReactDOM.render(
  <JokesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </JokesProvider>,
  document.getElementById('root'),
);
