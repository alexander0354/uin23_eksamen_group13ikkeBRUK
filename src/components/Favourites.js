//For MyFavourites, lag funksjonalitet som gjør følgende:
//* På visning av ett spill (, ha en knapp "Legg til favoritter".
//* Klikk på knappen "Legg til favoritter" skal lagre spillet i en array i en state kalt favourites.
//* MyFavourites skal hente/vise spill fra favourites-staten.

import React, { useState } from "react";
import "../sass/favourites.scss";
import axios from 'axios';
const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (game) => {
    setFavourites([...favourites, game]);
  };

  const games = [
    { id: 1, title: "Spill 1", description: "Beskrivelse av spill 1" },
    { id: 2, title: "Spill 2", description: "Beskrivelse av spill 2" },
    { id: 3, title: "Spill 3", description: "Beskrivelse av spill 3" },
  ];

  return (
    <div className="favourites">
      <h2 className="section-title">Mine favorittspill</h2>
      <div className="game-list">
        {games.map((game) => (
          <div className="game-card" key={game.id}>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <button onClick={() => addToFavourites(game)}>
              Legg til favoritter
            </button>
          </div>
        ))}
      </div>
      <h3>Dine favorittspill:</h3>
      <ul>
        {favourites.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
};


export default Favourites;




