import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <div className="game-card-inner">
        <Link to={`/game/${game.slug}`}>
          <div className="game-card-front">
            <img src={game.background_image} alt={game.name} />
            <h3>{game.name}</h3>
          </div>
          <div className="game-card-back">
            <h3>{game.name}</h3>
            <p>{game.description_raw && game.description_raw.substring(0, 150)}...</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;