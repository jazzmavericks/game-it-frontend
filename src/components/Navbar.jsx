// Importing necessary modules, assets, and components
import React from "react";
import "../Navbar.css";
import { Link, Navigate } from 'react-router-dom';
import instaLogo from "../images/insta_logo.png";

function Navbar({loggedIn, email}) {
  return (
    <div className="navBar">
      <div className="logoBox">
        <img className="logo" src={instaLogo} alt="Instagram Logo" />
      </div>
      <div className="navMenuNotLoggedIn">
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
      <div className="loggedInMenu">
<ul>
<li>
  Welcome {email}
</li>
<li>
  log out
</li>
</ul>

      </div>
      :
        <div className="loggedoutMenu">
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
