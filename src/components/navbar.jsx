// Importing necessary modules, assets, and components
import React, { useState } from "react";
import "./navbar.css";
import { Link, Navigate } from 'react-router-dom';
import instaLogo from "../images/insta_logo.png";
import Logout from "./logout.jsx";
import UserSettings from "../pages/userSettings.jsx";


function Navbar({loggedIn, email, setEmail}) {
  return (

    <div className="navBar">
      <div className="logoBox">
      <h1>hello</h1>
        <img className="logo" src={instaLogo} alt="Instagram Logo" />
      </div>
      <div>
        <ul>
          <li><Link className="link" to="/main">Home</Link></li>
          <li><Link className="link" to="/gamesLibrary">Games Library</Link></li>
          {loggedIn &&
          <><li>My Games</li><li>Profile</li></>
          }
          <li>News</li>
          <li><Link className="link" to="/about">About</Link></li>
        </ul>
      </div>
      {loggedIn ?
      <div>
        <ul className="list2">
          <li>Welcome, {email}!</li>
          <li><Logout /></li>
          <li><UserSettings email={email} setEmail={setEmail}/></li>
        </ul>
      </div>
      :
      <div>
        <ul>
          <li><Link className="link" to="/login">Login</Link></li>
          <li><Link className="link" to="/register">Register</Link></li>
        </ul>
      </div>
      }
    </div>
  );
}

export default Navbar;
