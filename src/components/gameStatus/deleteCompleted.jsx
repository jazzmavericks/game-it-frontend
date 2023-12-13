import { readCookie } from "../../utils/utilities";
import React, { useState } from 'react';

function DeleteCompleted(props) {
    const [newStatus, setNewStatus] = useState('');

    async function sendStatusToBackend(email, gameID, newStatus, setLoggedIn) {
        try {
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

            if (updateStatusResponse.ok && updateStatusData.message === 'Status updated successfully') {
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

    function handleRemoveButtonClick() {
        const { email, userId, gameID, setLoggedIn } = props;
        sendStatusToBackend(email, gameID, newStatus, setLoggedIn);
    }

    return (
        <div style={{display:'flex',  justifyContent: 'center'}}>
            <button 
                type="button" 
                onClick={handleRemoveButtonClick}
                value={props.gameID} 
                onChange={handleStatusChange}>
                Remove
            </button>
        </div>
    )
};

export default DeleteCompleted;
