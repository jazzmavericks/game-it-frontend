import React, { useState } from 'react';
import '../components/navbar.css';
import '../pages/gamesLibrary.css';
import ShowPlaying from "../components/gameStatus/showPlaying";
import ShowCompleted from '../components/gameStatus/showCompleted';
import ShowOwned from "../components/gameStatus/showOwned";
import ShowWant from "../components/gameStatus/showWant";

function MyGames(props) {
    const [playingGames, setPlayingGames] = useState("");
    const [completedGames, setCompletedGames] = useState("");
    const [ownedGames, setOwnedGames] = useState("");
    const [wantedGames, setWantedGames] = useState("");

    return (
        <div>
            <div className="headerSection">
                <h1>My Games</h1>
            </div >
                <div class="horizontal-fade-line"></div>
            <div>
            <ShowPlaying 
                email={props.email} 
                playingGames={playingGames} 
                setLoggedIn={props.setLoggedIn} 
                setRegistered={props.setRegistered}
            />
            <ShowCompleted 
                email={props.email} 
                completedGames={completedGames} 
                setLoggedIn={props.setLoggedIn} 
                setRegistered={props.setRegistered}
            />
            <ShowOwned
                email={props.email} 
                ownedGames={ownedGames} 
                setLoggedIn={props.setLoggedIn} 
                setRegistered={props.setRegistered}
            />
            <ShowWant
                email={props.email} 
                wantedGames={wantedGames} 
                setLoggedIn={props.setLoggedIn} 
                setRegistered={props.setRegistered}
            />
            </div>
        </div>
    )
};

export default MyGames;