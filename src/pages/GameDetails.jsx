import React, { useState, useEffect } from 'react';
import '../pages/main.css';
import { GetGameData } from '../utils/getGameData';

const GameDetails = (props) => {
    const [gameDetails, setGameDetails] = useState(null);
    console.log(props);
    useEffect(() => {
      const gameId = props.gameID; // Using optional chaining
  
      const fetchGameDetails = async () => {
        try {
          if (gameId) {
            const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${process.env.REACT_APP_RAWG_KEY}`);
            const data = await response.json();
            setGameDetails(data);
            console.log(props.gameID);
          }
        } catch (error) {
          console.error('Error fetching game details: ', error);
        }
      };
  
      fetchGameDetails();
    }, [props.gameID?.params?.id]); // Using optional chaining in the dependency array

    console.log(gameDetails);
  
    return (
      <div className="game-details">
        {/* Displaying basic game details */}
        <img className="gameImage" src={gameDetails.background_image} alt={gameDetails.name} />
        <h3 className="gameTitle">{gameDetails.name}</h3>
        {/* {console.log(gameImage)}
        {console.log(gameTitle)} */}
        {/* Add more game details as needed */}
      </div>
    );
  };
  
  export default GameDetails;
  