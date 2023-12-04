// Importing necessary modules, assets, and components
import React from 'react';
import '../navbar.css';
import { Link } from 'react-router-dom';
import instaLogo from '../images/insta_logo.png';
import homeIcon from '../images/home.png';
import searchIcon from '../images/search.png';
import exploreIcon from '../images/explore.png';
import reelsIcon from '../images/reels.png';
import messagesIcon from '../images/messages.png';
import notificationsIcon from '../images/notifications.png';
import createIcon from '../images/create.png';
import profileIcon from '../images/profile.png';
import hamburgerIcon from '../images/hamburger.png';

// Creating a functional component named Sidebar
function Sidebar() {
  return (
    // Sidebar container
    <div className="sidebar">
      {/* Instagram Logo */}
      <img className="logo" src={instaLogo} alt="Instagram Logo" />

      {/* List of navigation items */}
      <ul>
       
        <li><img className="menuIcon" src={reelsIcon} alt="reels icon" /> Reels</li>
        <li><img className="menuIcon" src={messagesIcon} alt="messages icon" /> Messages</li>
        <li><img className="menuIcon" src={notificationsIcon} alt="notifications icon" /> Notifications</li>
        <li><img className="menuIcon" src={createIcon} alt="create icon" /> Create</li>
        <li><img className="menuIcon" src={profileIcon} alt="profile icon" /> Profile</li>
        <li> </li>
        <li><img className="menuIcon" src={hamburgerIcon} alt="hamburger icon" /> More</li>
      </ul>
    </div>
  );
}

export default Sidebar;
