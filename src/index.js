import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FavPokemonsContextProvider } from './Contexts/FavPokemonsContext'
import Routes from './Routes';


ReactDOM.render(
  <React.StrictMode>
    <FavPokemonsContextProvider>
      <Routes />
    </FavPokemonsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
