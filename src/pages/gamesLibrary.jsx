import React, { useState } from 'react';
import '../pages/gamesLibrary.css';
import '../modalStyles.css';
import { GetGameData } from '../utils/getGameData';
import AllGames from '../components/allGames';
import SearchBox from '../components/searchBox';
import Modal from 'react-modal';
import Playing from '../components/gameStatus/playing';
import Owned from '../components/gameStatus/owned';
import Want from '../components/gameStatus/want';
import Completed from '../components/gameStatus/completed';

function Main(props) {
    const [selectedOption, setSelectedOption] = useState('rating');
    const [games, setGames] = useState([]);
    const [previousPage, setPreviousPage] = useState('');
    const [nextPage, setNextPage] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [gameData, setGameData] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // const [showPlaystation3, setShowPlaystation3] = useState(true);
    // const [showPlaystation4, setShowPlaystation4] = useState(true);
    // const [showPlaystation5, setShowPlaystation5] = useState(true);
    // const [showPC, setShowPC] = useState(true);
    // const [showXbox360, setShowXbox360] = useState(true);
    // const [showXboxOne, setShowXboxOne] = useState(true);
    // const [showXboxSX, setShowXboxSX] = useState(true);

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

// For handling PlayStation 3 change
// const handlePlaystation3Change = () => {
//     setShowPlaystation3(!showPlaystation3);
// };

// For handling PlayStation 4 change
// const handlePlaystation4Change = () => {
//     setShowPlaystation4(!showPlaystation4);
// };

// For handling PlayStation 5 change
// const handlePlaystation5Change = () => {
//     setShowPlaystation5(!showPlaystation5);
// };

// For handling PC change
// const handlePCChange = () => {
//     setShowPC(!showPC);
// };

// For handling Xbox 360 change
// const handleXbox360Change = () => {
//     setShowXbox360(!showXbox360);
// };

// For handling Xbox One change
// const handleXboxOneChange = () => {
//     setShowXboxOne(!showXboxOne);
// };

// For handling Xbox Series S/X change
// const handleXboxSXChange = () => {
//     setShowXboxSX(!showXboxSX);
// };

const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
};

const fetchGameData = async (searchTerm) => {
    try {
        const data = await GetGameData(searchTerm, setSearchResults, selectedOption); // Pass selectedOption here
        setGameData(data);
        setModalIsOpen(true); // Open the modal after fetching data
        setPreviousPage(data.previous);
        setNextPage(data.next);
    } catch (error) {
        console.log(error);
    }
};


const handleSearch = (searchTerm, searchResults) => {
    fetchGameData(searchTerm, setSearchResults, setSelectedOption);
    console.log(searchTerm);
    console.log(searchResults);
};

const closeModal = () => {
    setModalIsOpen(false); // Close the modal
    setGameData(null); // Reset gameData when modal closes
};

async function clickHandler() {
    await GetGameData();
}

return (
    <div className="libraryBody">
        <div className="headerSection">
          <h1>Games Library</h1>
        </div>
        <div class="horizontal-fade-line"></div>
        <div className="mainContent">
            <div className="sideBar">
            <div className="searchBox">
                    <h1>Search</h1>
                    <SearchBox onSearch={handleSearch} searchResults={searchResults} setSearchResults={setSearchResults} />
                </div>
                <div className="sortBy">
                    <h1>Sort By</h1>
                    <hr />
                    <label>
                        <input
                        type="radio"
                        value="name"
                        checked={selectedOption === 'name'}
                        onChange={handleOptionChange}
                        />
                        A to Z
                    </label>
                    <br />
                    <label>
                        <input
                        type="radio"
                        value="-name"
                        checked={selectedOption === '-name'}
                        onChange={handleOptionChange}
                        />
                        Z to A
                    </label>
                    <br />
                    <label>
                        <input
                        type="radio"
                        value="released"
                        checked={selectedOption === 'released'}
                        onChange={handleOptionChange}
                        />
                        Recently Released
                    </label>
                    <br />
                    <label>
                        <input
                        type="radio"
                        value="rating_top"
                        checked={selectedOption === 'rating_top'}
                        onChange={handleOptionChange}
                        />
                        Best Rated
                    </label>
                    <br />
                    <label>
                        <input
                        type="radio"
                        value="metacritic"
                        checked={selectedOption === 'metacritic'}
                        onChange={handleOptionChange}
                        />
                        Metacritic Rating
                    </label>
                    <br />
                </div>
                {/* <div className="filterBy">
                    <h1>Filter By</h1>
                    <hr />
                    Platform
                    <br />
                    <label>
                    <input type="checkbox" checked={showPC} onChange={handlePCChange} />
                    PC
                    </label>
                    <br />
                    <label>
                    <input type="checkbox" checked={showPlaystation3} onChange={handlePlaystation3Change} />
                    Playstation 3
                    </label>
                    <br />
                    <label>
                    <input type="checkbox" checked={showPlaystation4} onChange={handlePlaystation4Change} />
                    Playstation 4
                    </label>
                    <br />
                    <label>
                    <input type="checkbox" checked={showPlaystation5} onChange={handlePlaystation5Change} />
                    Playstation 5
                    </label>
                    <br />
                    <label>
                    <input type="checkbox" checked={showXbox360} onChange={handleXbox360Change} />
                    Xbox 360
                    </label>
                    <br />
                    <label>
                    <input type="checkbox" checked={showXboxOne} onChange={handleXboxOneChange} />
                    Xbox One
                    </label>
                    <br />
                    <label>
                    <input type="checkbox" checked={showXboxSX} onChange={handleXboxSXChange} />
                    Xbox Series S/X
                    </label>
                </div> */}
            </div>
            <div className="gamesSection">
            <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Game Data Modal"
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color for the overlay (behind the modal)
                        },
                        content: {
                            background: 'linear-gradient(to right, #1C1C23, #2f2f3f)', // Background color for the modal content
                            /* Add other styles if needed */
                        },
                    }}
                >
                    <button className="closeButton" onClick={closeModal}>Close</button>
                    {/* Display game data in the modal */}
                    <div className="paginationControlsModal">
                        {previousPage && ( // Check if previousPage exists and is not null
                        <button className="paginationButtonModal" onClick={handlePreviousPage}>
                        PREVIOUS
                        </button>
                        )}
                        {nextPage && ( // Check if nextPage exists and is not null
                        <button className="paginationButtonModal" onClick={handleNextPage}>
                        NEXT
                        </button>
                        )}
                    </div>
                    <div className="gamesContainer">
                        {searchResults && searchResults.results && searchResults.results.map((game) => (
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
                    </div>
                </Modal>
                <AllGames
                    gameID={props.gameID}
                    setGameID={props.setGameID}
                    email={props.email}
                    selectedSortOption={selectedOption}
                    fetchGameData={fetchGameData}
                ></AllGames>
            </div>
        </div>
    </div>
  );
}

export default Main;
