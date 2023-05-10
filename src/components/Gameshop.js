import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameShop = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios.get('https://api.rawg.io/api/games?key=cb756380bfee4e919c3c398e5bd0da08', {
        params: {
          ordering: '-released',
          page_size: 10,
        },
        headers: {
          'User-Agent': 'GameHub/1.0',
          'Authorization': 'Bearer cb756380bfee4e919c3c398e5bd0da08',
        },
      });
      setGames(response.data.results.filter(game => !game.name.toLowerCase().includes('the')));
    }
    fetchGames();
  }, []);

  return (
    <div className="game-shop">
      <h2>New Releases</h2>
      <div className="game-list">
        {games.map(game => (
          <div className="game-card" key={game.id}>
            <img src={game.background_image || "default-image.jpg"} alt={game.name} />
            <h3>{game.name}</h3>
            <p>{game.released}</p>
            <button className="buy-button">Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameShop;