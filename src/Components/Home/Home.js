import React from 'react';
import PokemonList from '../PokemonList/PokemonList';
import FavCounter from '../FavCounter/FavCounter';
import { Link } from 'react-router-dom'
const Home = () => (
  <div className='container'>
    <FavCounter />
    <PokemonList showButtons />
    <Link to="/favorites" > favs </Link>
  </div>
);

export default Home;


