import React, { useState, useEffect } from 'react';
import '../components/allGames.css';

const AllGames = () => {
    const [games, setGames] = useState([]);
    const [previousPage, setPreviousPage] = useState('');
    const [nextPage, setNextPage] = useState('');
  
    useEffect(() => {
      const fetchGames = async () => {
        try {
          const res = await fetch(`https://rawg.io/api/games?token&key=${process.env.REACT_APP_RAWG_KEY}`);
          const data = await res.json();
          console.log(data);
          setGames(data.results);
          setPreviousPage(data.previous);
          setNextPage(data.next);
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
                  <div>OWN</div>
                  <div>WANT</div>
                </div>
              </div>
              <div className="controls">
                <div className="control">
                  <div>PLAYING</div>
                  <div>COMPLETED</div>
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