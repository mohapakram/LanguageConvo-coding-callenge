import React, { useContext } from 'react';
import { FavPokemonsContext } from '../../Contexts/FavPokemonsContext';
import { CounterContianer } from './Styled/index'

const FavCounter = () => {
    const { favPokeList } = useContext(FavPokemonsContext)
    return (
        <CounterContianer>
            <p><span>{favPokeList.length}</span> Favorite Pokemon </p>
        </CounterContianer>
    );
};

export default FavCounter;