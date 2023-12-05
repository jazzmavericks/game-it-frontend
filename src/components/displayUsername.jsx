import React, { useState, useEffect } from 'react';

function DisplayUsername(props) {
    const [user, setUser] = useState(null);

    const handleLogin = (username) => {
        setUser(username);
    };

    const fetchuser = async () => {
        try {
            const response = await fetch("http://localhost:5001/displayUsername", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${props.token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.User.email); 
            } else {
                console.error("Failed to fetch username");
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchuser();
    }, []); // Run once when the component mounts

    return (
        <div>
            <h2>Welcome, {user}!</h2>
        </div>
    );
}

export default DisplayUsername;

