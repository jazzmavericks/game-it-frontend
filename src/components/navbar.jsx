// Importing necessary modules, assets, and components
import React from "react";
import "../navbar.css";
import { Link } from "react-router-dom";
import instaLogo from "../images/insta_logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logoBox">
        <img className="logo" src={instaLogo} alt="Instagram Logo" />
      </div>
      <div className="navMenuNotLoggedIn">
        <ul>
          <li>Home</li>
          <li>Games Library</li>
          <li>News</li>
          <li>About</li>
        </ul>
      </div>
        <div className="loggedoutMenu">
        <ul>
          <li>Login</li>
          <li>Register</li>
      </ul>
        </div>
      </div>
  );
}

export default Navbar;
