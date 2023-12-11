import { readCookie } from "../../utils/utilities";
import React, { useState } from 'react';

function Playing(props){
    const [newStatus, setNewStatus] = useState('');

    async function sendUpdateStatusToBackend(email, newStatus, setLoggedIn) {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/statusPlaying`, {
                    method: "PUT",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify({
                        email: email,
                        gameID: gameID,
                        newStatus: newStatus
                    })
                }
            )
            const data = await response.json();
            console.log(data);
        if (response.ok && data.message === 'status updated') {
            readCookie("jwt_token");
            setLoggedIn(true);
        } else {
            // Handle other scenarios or provide error feedback to the user.
            console.error('Failed to update status:', data.message);
        }

        } catch (error) {
            console.log(error)
        }
    }
        function handleStatusChange(event) {
            setNewUsername(event.target.value);
        }

        function handleSubmit(event) {
            event.preventDefault();
            console.log(props);
            sendUpdateStatusToBackend(props.email, newStatus, props.setLoggedIn)
        }
        console.log(props.email)

    return (
        <div onSubmit={handleSubmit}>
            <button onChange={handleStatusChange}>
                Playing
            </button>
        </div>
    )
};

export default Playing;