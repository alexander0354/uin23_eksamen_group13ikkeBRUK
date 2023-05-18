//For MyGames, hent 4 spill fra en valgri sjanger som vises i seksjonen My Games i dashboard, 
//og 20 spill fra samme sjanger på My Games-biblioteksiden (/mygames)
import React, { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "./GameCard";
import '../sass/mygames.scss';



const MyGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios.get('https://api.rawg.io/api/games?key=cb756380bfee4e919c3c398e5bd0da08', {
        params: {
          ordering: '-rating', // Endret fra '-released' til '-rating'
          page_size: 20,
        },
        headers: {
          'User-Agent': 'GameHub/1.0',
          'Authorization': 'Bearer cb756380bfee4e919c3c398e5bd0da08',
        },
      });
      setGames(response.data.results);
    }
    fetchGames();
  }, []);

  return (
    <div className="my-games">
      <h2 className="section-title">My Games Library</h2>
      <div className="game-list">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default MyGames;