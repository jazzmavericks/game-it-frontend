// Importing necessary modules, assets, and components
import React from 'react';
import '../Navbar.css';
import { Link } from 'react-router-dom';

// Creating a functional component named Nav Bar
function LatestGames() {
  return (
    <div>
        <div className="headingSection">
            <h1>Latest Games</h1>
            <hr />
        </div>
        <div className="mainSection">
            <gameCard></gameCard>
        </div>
    </div>
  );
}

export default LatestGames;
