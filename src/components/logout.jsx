// Importing necessary modules, assets, and components
import React from 'react';
import '../pages/main.css';
import { useNavigate } from 'react-router-dom';
import profileIcon from '../images/profile.png';
import profileIcon1 from '../images/profile1.png';
import profileIcon2 from '../images/profile2.png';
import profileIcon3 from '../images/profile3.png';
import profileIcon4 from '../images/profile4.png';
import profileIcon5 from '../images/profile5.png';

// Creating a functional component named Logout
function Logout(props) {
    // Using the useNavigate hook from react-router-dom
    const navigate = useNavigate();

    // Function to handle logout
    function logoutfunc(setLoggedIn, setUserList, setEmail, setRegistered) {
        try {
            // Clearing the JWT token cookie
            document.cookie = "jwt_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            
            // Resetting state variables and clearing data
            setLoggedIn(false);
            setRegistered(false);
            setUserList([]);
            setEmail("");
            console.log("logged out");
            
            // Navigating to the "/login" route
            navigate("/login");
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
        <div className="rightColumn">
            {/* User profile section */}
            <div className="logoutRow">
                <div className="profileIconContainer">
                    <img className="profileIcon" src={profileIcon} alt="profile icon" />
                </div>
                <div className="userInfo">
                    <span><h1>My Profile</h1></span>
                    <span><p>myprofileusername</p></span>
                </div>
                {/* Logout button */}
                <div className="followButtonContainer">
                    <button className="logoutButton" onClick={handleLogout}>Logout</button>
                </div>
            </div>

            {/* Suggested users section */}
            {/* Rendering profiles with buttons to follow */}
            <div className="suggestedHeader">
                <div>
                    <p>Suggested for you</p>
                </div>
                <div>
                    <h1>See All</h1>
                </div>
            </div>

            {/* Suggested user profiles */}
            {/* Example profiles with follow buttons */}
            <div className="logoutRow">
                <div className="profileIconContainer">
                    <img className="profileIcon1" src={profileIcon1} alt="profile icon" />
                </div>
                <div className="userInfo">
                    <span><h1>shrubchester</h1></span>
                    <span><p>Suggested for you</p></span>
                </div>
                <div className="followButtonContainer">
                    <button className="logoutButton">Follow</button>
                </div>
            </div>
            <div className="logoutRow">
                <div className="profileIconContainer">
                  <img className="profileIcon2" src={profileIcon2} alt="profile icon" />
                </div>
                <div className="userInfo">
                  <span><h1>welovegoodtimes</h1></span>
                  <span><p>Suggested for you</p></span>
                </div>
                <div className="followButtonContainer">
                  <button className="logoutButton">Follow</button>
                </div>
            </div>

            <div className="logoutRow">
                <div className="profileIconContainer">
                  <img className="profileIcon3" src={profileIcon3} alt="profile icon" />
                </div>
                <div className="userInfo">
                  <span><h1>Santa.claws25th</h1></span>
                  <span><p>Suggested for you</p></span>
                </div>
                <div className="followButtonContainer">
                  <button className="logoutButton">Follow</button>
                </div>
            </div>

            <div className="logoutRow">
                <div className="profileIconContainer">
                  <img className="profileIcon4" src={profileIcon4} alt="profile icon" />
                </div>
                <div className="userInfo">
                  <span><h1>ObamaLlama</h1></span>
                  <span><p>Suggested for you</p></span>
                </div>
                <div className="followButtonContainer">
                  <button className="logoutButton">Follow</button>
                </div>
            </div>

            <div className="logoutRow">
                <div className="profileIconContainer">
                  <img className="profileIcon5" src={profileIcon5} alt="profile icon" />
                </div>
                <div className="userInfo">
                  <span><h1>VladPutin99</h1></span>
                  <span><p>Suggested for you</p></span>
                </div>
                <div className="followButtonContainer">
                  <button className="logoutButton">Follow</button>
                </div>
            </div>
          </div>
    );
};

export default Logout;

  