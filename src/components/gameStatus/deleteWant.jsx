import React, { useState } from 'react';

function DeleteWant(props) {
    const [newStatus, setNewStatus] = useState('');

    async function sendStatusToBackend(email, gameID, newStatus, setLoggedIn) {
        try {
            const updateStatusResponse = await fetch(
                `${process.env.REACT_APP_BASE_URL}/statusWant`, {
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
                props.onStatusChange(); 
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
        const { email, gameID, setLoggedIn } = props;
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

export default DeleteWant;
