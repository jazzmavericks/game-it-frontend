import React, { useState } from 'react';
import '../components/navbar.css';
import '../pages/gamesLibrary.css';
import ShowPlaying from "../components/gameStatus/showPlaying";

function MyGames(props) {
    const [playingGames, setPlayingGames] = useState("");

    return (
        <div>
            <div className="headerSection">
                <h1>My Games</h1>
            </div>
            <div class="horizontal-fade-line"></div>
            <ShowPlaying email={props.email} playingGames={playingGames} setLoggedIn={props.setLoggedIn}/>
        </div>
    )
};

export default MyGames;