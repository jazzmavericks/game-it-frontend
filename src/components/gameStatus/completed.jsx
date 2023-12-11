import { readCookie } from "../../utils/utilities";
import React, { useState } from 'react';

function Completed(props){
    const [newStatus, setNewStatus] = useState('');
    const [gameID, setGameID] = useState('');

    async function sendAddGameAndStatusToBackend(email, gameID, newStatus, setLoggedIn) {
        try {
            // Add game to user
            console.log(email);
            const addGameResponse = await fetch(
                `${process.env.REACT_APP_BASE_URL}/addGameToUser`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        email: email,
                        gameID: gameID,
                    })
                }
            );
            const addGameData = await addGameResponse.json();
            console.log(addGameData);

            // Change playing status
            const updateStatusResponse = await fetch(
                `${process.env.REACT_APP_BASE_URL}/statusCompleted`, {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        email: email,
                        gameID: gameID,
                        newStatus: newStatus,
                    })
                }
            );
            const updateStatusData = await updateStatusResponse.json();
            console.log(updateStatusData);

            if (addGameResponse.ok && addGameData.message === 'game added to user' &&
                updateStatusResponse.ok && updateStatusData.message === 'Status updated successfully') {
                readCookie("jwt_token");
                setLoggedIn(true);
            } 

        } catch (error) {
            console.error(error);
        }
    }

    function handleStatusChange(event) {
        setNewStatus(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(props);
        const userID = props.userId; 
        const gameID = props.gameID;
        sendAddGameAndStatusToBackend(props.email, gameID, userID, newStatus, props.setLoggedIn);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <button 
                    type="submit" 
                    onClick={handleStatusChange}
                    value={gameID} 
                    onChange={(e) => setGameID(e.target.value)}>
                    COMPLETED
                </button>
            </form>
        </div>
    )
};

export default Completed;