import React, { useState } from 'react';
import '../pages/gamesLibrary.css';
import { GetGameData } from '../utils/getGameData';
import AllGames from '../components/allGames';
import SearchBox from '../components/searchBox';

function Main() {
    const [selectedOption, setSelectedOption] = useState('alphabetical');

    const [showPlatform, setShowPlatform] = useState(true);
    const [showRating, setShowRating] = useState(true);
    const [showYear, setShowYear] = useState(true);

    const handlePlatformChange = () => {
        setShowPlatform(!showPlatform);
    };

    const handleRatingChange = () => {
        setShowRating(!showRating);
    };

    const handleYearChange = () => {
        setShowYear(!showYear);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSearch = (searchTerm) => {
        // Perform actions with the search term (e.g., fetch data, filter items, etc.)
        console.log('Search term:', searchTerm);
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
                    <SearchBox onSearch={handleSearch} />
                </div>
                <div className="sortBy">
                    <h1>Sort By</h1>
                    <hr />
                    <label>
                        <input
                        type="radio"
                        value="alphabetical"
                        checked={selectedOption === 'alphabetical'}
                        onChange={handleOptionChange}
                        />
                        Alpabetical
                    </label>
                    <br />
                    <label>
                        <input
                        type="radio"
                        value="releaseDate"
                        checked={selectedOption === 'releaseDate'}
                        onChange={handleOptionChange}
                        />
                        Release Date
                    </label>
                    <br />
                    <label>
                        <input
                        type="radio"
                        value="rating"
                        checked={selectedOption === 'rating'}
                        onChange={handleOptionChange}
                        />
                        Rating
                    </label>
                </div>
                <div className="filterBy">
                    <h1>Filter By</h1>
                    <hr />

                    <label>
                        <input
                        type="checkbox"
                        checked={showPlatform}
                        onChange={handlePlatformChange}
                        />
                        Platform
                    </label>
                    <br />
                    <label>
                        <input
                        type="checkbox"
                        checked={showRating}
                        onChange={handleRatingChange}
                        />
                        Rating
                    </label>
                    <br />
                    <label>
                        <input
                        type="checkbox"
                        checked={showYear}
                        onChange={handleYearChange}
                        />
                        Year
                    </label>
                </div>
            </div>
            <div className="gamesSection">
                <AllGames></AllGames>
            </div>
        </div>
    </div>
  );
}

export default Main;
