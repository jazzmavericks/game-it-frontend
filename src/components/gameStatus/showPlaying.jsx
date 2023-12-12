import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

// Creating a functional component named RegisterForm
function ShowPlaying(props) {
    const [playingGames, setPlayingGames] = useState([]);
    const [games, setGames] = useState([]);
    const [searchResults, setSearchResults] = useState();
    const [resultsArray, setResultsArray] = useState([]);
    const navigate = useNavigate();

    // Function to send registration data to the backend
    async function sendShowStatusFromBackend(email, setPlayingGames, setLoggedIn, setRegistered) {
        try {
            console.log(process.env.REACT_APP_BASE_URL);
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/showPlaying`,
                {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: email,
                    })
                }
            );
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json().catch(error => {
                console.error('Error parsing JSON:', error.message);
             });
             console.log(data);

             var myArray2 = [];

             var myArray = data.details;
             console.log(myArray);
             console.log(data);
             let x = 
             await Promise.all(myArray.map((item, index) => {
                console.log(item.gameID)
                getGameDataByID(item.gameID)

                 console.log(searchResults)
                 myArray2.push(searchResults)
                 return myArray2
             }))
             console.log(x);

             var myArray3 = []

             for (let i = 0; i < myArray.length; i++) {
                let x = getGameDataByID (myArray[i].gameID);
                console.log(x);
                myArray3.push(x);
             }
             console.log(myArray3);
             setResultsArray (myArray3);



            setPlayingGames(data.details, () => {
                // Code to run after state has been updated
                console.log('Playing games state updated:', playingGames);
            });

            // Setting loggedIn and registered states
            setLoggedIn(true);
            setRegistered(true);

        } catch (error) {
            console.error('Error finding show status for: Playing', error.message);
        }
    }

    async function fetchGames() {
        try {
            const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}`);
            const data = await res.json();
            
        } catch (error) {
            console.error('Error fetching games:', error.message);
        }
    }
    async function getGameDataByID(searchID) {
        try {
        console.log(searchID);    
        const url = `https://api.rawg.io/api/games/${searchID}`+`?key=${process.env.REACT_APP_RAWG_KEY}`
        console.log(url);
        const res4 = await fetch(url);
        const data4 = await res4.json();
        console.log(data4);
        setSearchResults(data4);
        return data4;
        } catch (error) {
            console.error('Error fetching gameID:', error.message);
        }
        
    }

    useEffect(() => {
        fetchGames();
        sendShowStatusFromBackend(props.email, setPlayingGames, props.setLoggedIn, props.setRegistered);
     }, [props.email]);
     

    useEffect(() => {
        // Log the updated state here
        console.log('Fetched playing status:', playingGames);
    }, [playingGames]);

    return (
        <div>
            <div className="libraryBody">
                <div className="headerSection">
                    <h1>Games Playing: </h1>
                </div>
                <div className="horizontal-fade-line"></div>
    
                <div className="gamesContainer">
                    {(resultsArray) ? (
                        resultsArray.map((game) => (
                            <div className="gameItem" key={game.id}>
                                <img className="gameImage" src={game.background_image} alt={game.name} />
                                <h3 className="gameTitle">{game.name}</h3>
                            </div>
                        ))
                    ) : (
                        <p>No games currently playing.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShowPlaying;