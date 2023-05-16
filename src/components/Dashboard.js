import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";

function DashBoard() {
  const [newestGames, setNewestGames] = useState([]);
  const [myGames, setMyGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        // Hent ut de tre mest populære spillene fra API-et
        const response = await fetch(
          'https://api.rawg.io/api/games?ordering=-action&page_size=3&key=cb756380bfee4e919c3c398e5bd0da08'
        );
        const data = await response.json();
        setNewestGames(data.results);

        // Hent ut 10 spill for My Games
        const response2 = await fetch(
          'https://api.rawg.io/api/games?page_size=10&key=cb756380bfee4e919c3c398e5bd0da08'
        );
        const data2 = await response2.json();
        setMyGames(data2.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="dashboard">
      <section className="gameshop">
        <h2>Game Shop</h2>
        {newestGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>

      <section className="mygames">
        <h2>My Games</h2>
        {myGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>

      <section className="myfavourites">
        <h2>My Favourites</h2>
        <p>Coming soon...</p>
      </section>
    </div>
  );
}

export default DashBoard;