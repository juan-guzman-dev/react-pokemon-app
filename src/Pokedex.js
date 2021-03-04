import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

/** Index of Pokemon: show individual cards. */

function Pokedex(props) {
    console.log(props.pokemon[0].id)
    let winMessage = null;
    let borderColorWinner = null
    if (props.isWinner) {
        winMessage = <p className="Pokedex-winner">🎉🎉🎉THIS HAND WINS!🎉🎉🎉</p>;
        borderColorWinner = 'red'
    }



    return (
        <div className="Pokedex" style={{ borderColor: borderColorWinner }} >
            {winMessage}
            <h2 className="Pokedex-title">Pokedex {props.num}</h2>
            <div className="Pokedex-cards">
                {props.pokemon.map(p => (
                    < Pokecard
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>
            <h4>Total experience: {props.exp}</h4>
        </ div>
    );
}

export default Pokedex;