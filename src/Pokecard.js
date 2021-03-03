import React from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/' +
    'PokeAPI/sprites/master/sprites/pokemon/';


/** Individual Pokemon card. */

function Pokecard(props) {
    let imgSrc = `${POKE_API}${props.id}.png`;

    return (
        <div className="Pokecard">
            <div className="Pokecard-title">{props.name}</div>
            <img className="Pokecard-image" src={imgSrc} alt="pokemon" />
            <div className="Pokecard-data">Type: {props.type}</div>
            <div className="Pokecard-data">Experience: {props.exp}</div>
        </div>
    );
}

export default Pokecard;