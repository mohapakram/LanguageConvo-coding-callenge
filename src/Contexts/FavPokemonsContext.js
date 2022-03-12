import React, { createContext, useState } from 'react';

export const FavPokemonsContext = createContext(null)

export const FavPokemonsContextProvider = ({ children }) => {
    const [favPokeList, setFavPokeList] = useState([])

    return (
        <FavPokemonsContext.Provider value={{ favPokeList, setFavPokeList }}>
            {children}
        </FavPokemonsContext.Provider>
    );
};

