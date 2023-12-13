import React, { useState, useEffect } from 'react';
import '../components/allGames.css';
import { Link } from 'react-router-dom';
import Playing from './gameStatus/playing';
import Owned from './gameStatus/owned';
import Want from './gameStatus/want';
import Completed from './gameStatus/completed';

const AllGames = (props) => {
  const { selectedSortOption, fetchGameData } = props;
  const [games, setGames] = useState([]);
  const [previousPage, setPreviousPage] = useState('');
  const [nextPage, setNextPage] = useState('');
  
    useEffect(() => {
      fetchGames(selectedSortOption);
  }, [selectedSortOption]);
  
  const fetchGames = async (sortOption = '') => {
    try {
        if (sortOption === "alphabeticalA2Z") {
          sortOption = "&ordering=name";
      } else if (sortOption === "alphabeticalZ2A") {
        sortOption = "&ordering=-name";
      } else if (sortOption === "rating") {
        sortOption = "&ordering=rating_top";
      } else if (sortOption === "metacritic") {
        sortOption = "&ordering=metacritic";
      } else if (sortOption === "releaseDate") {
        sortOption = "&ordering=released";
      } 
        const url = `https://rawg.io/api/games?token&key=${process.env.REACT_APP_RAWG_KEY}&ordering=${sortOption}`
        console.log(url)
        const res = await fetch(url);
        const data = await res.json();
        setGames(data.results);
        setPreviousPage(data.previous);
        setNextPage(data.next);
        console.log(sortOption)
    } catch (error) {
        console.log(error);
    }
};
  
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
              {/* Find Out More button linked to GameDetails */}
              <Link to="/GameDetails" state={{gameIdentifier:game.id}}>
                <button className="findOutMore">FIND OUT MORE</button>
              </Link>
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
