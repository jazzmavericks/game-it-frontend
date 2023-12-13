import { readCookie } from "../../utils/utilities";
import React, { useState } from 'react';

function AddGameToUser(props){
    const [gameID, setGameID] = useState('');

    async function sendAddGameToBackend(email, gameID, setLoggedIn) {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/addGameToUser`, {
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify({
                        email: email,
                        gameID: gameID,
                    })
                }
            )
            const data = await response.json();
            console.log(data);
        if (response.ok && data.message === 'game added to user') {
            readCookie("jwt_token");
            setLoggedIn(true);
        } else {
            // Handle other scenarios or provide error feedback to the user.
            console.error('Failed to add game to user:', data.message);
        }

        } catch (error) {
            console.log(error)
        }
    }

        function handleSubmit(event) {
            event.preventDefault();
            console.log(props);
            sendAddGameToBackend(props.email, gameID, props.setLoggedIn)
        }
        console.log(props.email)

    return (
        <div onSubmit={handleSubmit}>
        </div>
    )
};

export default AddGameToUser;