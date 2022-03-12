import React, { useState, useContext } from 'react';
import { FavButton, ListItemContainer } from './Styles';
import { FavPokemonsContext } from '../../Contexts/FavPokemonsContext';

const ListItem = ({ name, showButton }) => {
    const { favPokeList, setFavPokeList } = useContext(FavPokemonsContext)
    const isFav = favPokeList.includes(name)

    const addPokeToFav = () => {
        setFavPokeList([...favPokeList, name])
    }

    const removePokeFromFav = () => {
        setFavPokeList(favPokeList.filter(n => n !== name))
    }

    const updateFav = () => {
        if (!isFav) {
            addPokeToFav()
        } else {
            removePokeFromFav()
        }
    }

    return (
        <ListItemContainer showButton={showButton} isFav={isFav}>
            <p>{name}</p>
            <div>
                <span>{favPokeList.length}</span>
                {showButton && (
                    <FavButton isFav={isFav} onClick={updateFav}>
                        Favorite
                    </FavButton>
                )}
            </div>
        </ListItemContainer>
    );
};

export default ListItem;