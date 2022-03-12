import React from 'react';
import PokemonList from '../PokemonList/PokemonList';
import { Link } from 'react-router-dom'

const Favorites = () => (
    <div className='container'>
        <PokemonList />
        <Link to="/"> Back </Link>
    </div>
)

export default Favorites;