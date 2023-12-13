import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

// Creating a functional component named RegisterForm
function ShowCompleted(props) {
    const [completedGames, setcompletedGames] = useState([]);
    const [searchResults, setSearchResults] = useState(null);
    const [resultsArray, setResultsArray] = useState([]);
    const navigate = useNavigate();

    // Function to send registration data to the backend
    async function sendShowStatusFromBackend(email, setLoggedIn, setRegistered) {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/showCompleted`,
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

            const data = await response.json();
            console.log(data);

            const gameIds = data.details.map(item => item.gameID);

            const gameDataArray = await Promise.all(gameIds.map((gameID) => getGameDataByID(gameID)));

            setResultsArray(gameDataArray);

            setcompletedGames(data.details);

            // Setting loggedIn and registered states
            setLoggedIn(true);
            setRegistered(true);

        } catch (error) {
            console.error('Error finding show status for: Completed', error.message);
        }
    }

    async function fetchGames() {
        try {
            const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}`);
            const data = await res.json();
            // Handle data as needed
        } catch (error) {
            console.error('Error fetching games:', error.message);
        }
    }

    async function getGameDataByID(searchID) {
        try {
            const url = `https://api.rawg.io/api/games/${searchID}?key=${process.env.REACT_APP_RAWG_KEY}`;
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
        sendShowStatusFromBackend(props.email, props.setLoggedIn, props.setRegistered);
    }, [props.email]);

    useEffect(() => {
        // Log the updated state here
        console.log('Fetched completed status:', completedGames);
    }, [completedGames]);

    return (
        <div>
            <div className="libraryBody">
                <div className="headerSection">
                    <h1 style={{color: "#3E92CC", fontSize: "larger"}}>Games Completed: </h1>
                </div>
                <div className="horizontal-fade-line"></div>
                <br></br>
                <div className="gamesContainer">
                    {resultsArray.length > 0 ? (
                        resultsArray.map((game) => (
                            <div className="gameItem" key={game.id}>
                                <img className="gameImage" src={game.background_image} alt={game.name} />
                                <h3 className="gameTitle">{game.name}</h3>
                            </div>
                        ))
                    ) : (
                        <p className='noGamesP'>No games currently completed.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShowCompleted;
