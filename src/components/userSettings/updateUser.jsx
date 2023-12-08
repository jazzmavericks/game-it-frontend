import { readCookie } from "../../utils/utilities";
import React, { useState } from 'react';

function UpdateUser(props){
    const [newUsername, setNewUsername] = useState('');

    async function sendUpdateUserToBackend(email, newUsername, setLoggedIn) {
        try {
            console.log(email);
            console.log(newUsername);
            const response = await fetch(
                "https://game-it-backend.onrender.com/chUsername", {
                    method: "PUT",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify({
                        email: email,
                        newUsername: newUsername
                    })
                }
            )
            const data = await response.json();
            console.log(data);
        if (response.ok && data.message === 'username updated') {
            readCookie("jwt_token");
            setLoggedIn(true);
        } else {
            // Handle other scenarios or provide error feedback to the user.
            console.error('Failed to update username:', data.message);
        }

        } catch (error) {
            console.log(error)
        }
    }
        function handleNewUsernameChange(event) {
            setNewUsername(event.target.value);
        }

        function handleSubmit(event) {
            event.preventDefault();
            console.log(props);
            sendUpdateUserToBackend(props.email, newUsername, props.setLoggedIn)
        }
        console.log(props.email)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    className="emailbox" 
                    type="text" 
                    id="email" 
                    placeholder="Enter a new username"
                    required 
                    onChange={handleNewUsernameChange}>
                </input>
                <br />
                <input
                    type="submit" 
                    value="Change username">
                </input>
            </form>
        </div>
    )
};

export default UpdateUser;