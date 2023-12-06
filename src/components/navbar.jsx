// Importing necessary modules, assets, and components
import React from 'react';
import '../Navbar.css';
import { Link } from 'react-router-dom';
import instaLogo from '../images/insta_logo.png';

// Creating a functional component named Nav Bar
function Navbar() {
  return (
    <div className="navBar">
      <div className="logoSection">
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
      <div className="loginSectionNotLoggedIn">
        <ul>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
