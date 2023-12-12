import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import '../pages/GameDetails.css';
import { GetGameData } from '../utils/getGameData';
import DOMPurify from 'dompurify';

const GameDetails = (props) => {
    const [gameDetails, setGameDetails] = useState(null);
    const Location = useLocation()
    console.log(Location.state.gameIdentifier);

    const fetchGameDetails = async (gameId) => {
      try {
          const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${process.env.REACT_APP_RAWG_KEY}`);
          const data = await response.json();
          setGameDetails(data);
      } catch (error) {
        console.error('Error fetching game details: ', error);
      }
    };

      var gameId = Location.state.gameIdentifier;

    useEffect(() => {
      fetchGameDetails(gameId);
    }, []
    )
  
    return (
      <div className="gameDetailsLayout">
          {(gameDetails) ? <div className="game-details">
            <div className="titleAndDescription">
                <h3 className="individualGameTitle">{gameDetails.name}</h3><br /><br />
                <p className="descriptionText" dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(gameDetails.description),
            }}
          ></p><br /><br />
            </div>
            <div className="imageAndDetails">
                <img className="individualGameImage" src={gameDetails.background_image} alt="Game image" />

                <h3>Current Metacritic Score:</h3>
                <p>{gameDetails.metacritic}</p><br /><br />

                <h3>Official Website:</h3>
                <p>{gameDetails.website}</p><br /><br />

                <h3>Developed by:</h3>
                {gameDetails.developers && gameDetails.developers.map((developer, index) => (
                    <p key={index}>{developer.name}</p>
                ))}<br /><br />

                <h3>Available on the following platforms:</h3>
                {gameDetails.platforms && gameDetails.platforms.map((platformData, index) => (
                  <div key={index}>
                    <p>{platformData.platform.name}</p>
                  </div>
                ))}
                <br /><br />

                <h3>Genres:</h3>
                {gameDetails.genres && gameDetails.genres.map((genres, index) => (
                  <p key={index}>{genres.name}</p>
                ))}<br /><br />

                {gameDetails.ratings && gameDetails.ratings.map((ratings, index) => (
                  <p key={index}>{ratings.name}</p>
                ))}<br /><br />
            </div>
          </div> : 
        <div>
          Loading...
        </div>}
      </div>
    );
  };
  
  export default GameDetails;
  