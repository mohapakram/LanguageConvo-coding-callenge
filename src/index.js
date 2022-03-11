import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GlobalContextProvider } from './Contexts/GlobalContextProvider'
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Routes />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
