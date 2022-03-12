import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from '../ListItem/ListItem';

const PokemonList = ({ favCount, showButtons }) => {
    const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
        fetchPoki()
    }, [])

    const fetchPoki = async () => {
        try {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5')
            setPokemonData(data.results)
            console.log(data.results)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ul>
            {pokemonData.map((pokemon, index) => (
                <li key={String(index)}>
                    <ListItem
                        favCount={favCount}
                        name={pokemon.name}
                        showButton={showButtons} />
                </li>
            ))}
        </ul>
    );
};

export default PokemonList;