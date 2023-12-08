// Importing necessary modules, assets, and components
import React from 'react';
import '../pages/main.css';
import { useNavigate } from 'react-router-dom';

// Creating a functional component named Logout
function Logout(props) {
    // Using the useNavigate hook from react-router-dom
    const navigate = useNavigate();

    // Function to handle logout
    function logoutfunc(setLoggedIn, setUserList, setEmail, setRegistered) {
        try {
            // Clearing the JWT token cookie
            document.cookie = "jwt_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            window.location.href = window.location.origin;
            // Resetting state variables and clearing data
            setLoggedIn(false);
            setRegistered(false);
            setUserList([]);
            setEmail("");
            console.log("logged out");
            
            // Navigating to the "/login" route
            navigate("/main");
        } catch (error) {
            console.log(error);
        }
    }

    // Function to handle logout button click
    function handleLogout(event) {
        logoutfunc(props.setLoggedIn, props.setUserList, props.setEmail, props.setRegistered);
    };

    // Rendering the Logout component
    return (
        <div >
          <div>
            <button className="logoutBtn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
    );
};

export default Logout;

  