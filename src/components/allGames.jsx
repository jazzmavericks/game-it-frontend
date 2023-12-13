import React, { useState, useEffect } from 'react';
import '../components/allGames.css';
import Playing from './gameStatus/playing';
import Owned from './gameStatus/owned';
import Want from './gameStatus/want';
import Completed from './gameStatus/completed';

const AllGames = (props) => {
    const [games, setGames] = useState([]);
    const [previousPage, setPreviousPage] = useState('');
    const [nextPage, setNextPage] = useState('');
    const [gameID, setGameID] = useState('');
  
    useEffect(() => {
      const fetchGames = async () => {
        try {
          const res = await fetch(`https://rawg.io/api/games?token&key=${process.env.REACT_APP_RAWG_KEY}`);
          const data = await res.json();
          console.log(data);
          setGames(data.results);
          setPreviousPage(data.previous);
          setNextPage(data.next);
          // console.log(data.results[0].id);
          // setGameID(parseInt(data.results[0].id));
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchGames();
    }, []);
  
    const handlePreviousPage = async () => {
      if (previousPage) {
        try {
          const res = await fetch(previousPage);
          const data = await res.json();
          setGames(data.results);
          setPreviousPage(data.previous);
          setNextPage(data.next);
        } catch (error) {
          console.log(error);
        }
      }
    };
  
    const handleNextPage = async () => {
      if (nextPage) {
        try {
          const res = await fetch(nextPage);
          const data = await res.json();
          setGames(data.results);
          setPreviousPage(data.previous);
          setNextPage(data.next);
        } catch (error) {
          console.log(error);
        }
      }
    };
  

    return (
      <div>
        <div className="paginationControls">
          {previousPage && ( // Check if previousPage exists and is not null
          <button onClick={handlePreviousPage}>
          PREVIOUS
          </button>
          )}
          {nextPage && ( // Check if nextPage exists and is not null
          <button onClick={handleNextPage}>
          NEXT
          </button>
          )}
        </div>
        <div className="gamesContainer">
          {games.map((game) => (
            <div className="gameItem" key={game.id}>
              <img className="gameImage" src={game.background_image} alt={game.name} />
              <h3 className="gameTitle">{game.name}</h3>
              <button className="findOutMore">FIND OUT MORE</button>
              <div className="controls">
                <div className="control">
                  <div><Owned email={props.email} gameID={game.id}/></div>
                  <div><Want email={props.email} gameID={game.id}/></div>
                </div>
              </div>
              <div className="controls">
                <div className="control">
                  <div><Playing email={props.email} gameID={game.id}/></div>
                  <div><Completed email={props.email} gameID={game.id}/></div>
                </div>
              </div>
            </div>
        ))}
        <div className="paginationControls">
          {previousPage && ( // Check if previousPage exists and is not null
            <button onClick={handlePreviousPage}>
            PREVIOUS
            </button>
          )}
          {nextPage && ( // Check if nextPage exists and is not null
            <button onClick={handleNextPage}>
            NEXT
            </button>
          )}
        </div>
      </div>
    </div>
    );
};

export default AllGames;
