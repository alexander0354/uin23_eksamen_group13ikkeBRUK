import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const GamePage = () => {
  const [gameInfo, setGameInfo] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchGameInfo = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${slug}`
        );
        const data = await response.json();
        setGameInfo(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGameInfo();
  }, [slug]);

  return (
    <div>
      {gameInfo ? (
        <>
          <h2>{gameInfo.name}</h2>
          <img src={gameInfo.background_image} alt={gameInfo.name} />
          <p>{gameInfo.description_raw}</p>
          <p>Released: {gameInfo.released}</p>
          <p>Genres: {gameInfo.genres.map((genre) => genre.name).join(", ")}</p>
        </>
      ) : (
        <p>Loading game information...</p>
      )}
    </div>
  );
};

export default GamePage;