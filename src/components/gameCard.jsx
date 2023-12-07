// Importing necessary modules, assets, and components
import React from 'react';
import '../Navbar.css';
import { Link } from 'react-router-dom';
import GamePic from '../images/team-logo.png';

// Creating a functional component named Nav Bar
function LatestGames() {
  return (
    <div>
        <div className="gameCard">
            <div className="gameImage">
                <img className="gamePic" src={GamePic} alt="Game Picture" />
            </div>
            <div className="gameName">
                James Powley
            </div>
            <div className="gameInfoButton">
                <button>find out more</button>
            </div>
            <div className="profileLinks">
                <div className="profileEmail">
                    <div><img className="emailIcon" src={EmailIcon} alt="Email Icon" /></div>
                    <div>own</div>
                </div>
                <div className="profileSite">
                    <div><img className="websiteIcon" src={WebsiteIcon} alt="Website Icon" /></div>
                    <div>want</div>
                </div>
                <div className="profileLinkedIn">
                    <div><img className="linkedInIcon" src={LinkedInIcon} alt="LinkedIn Icon" /></div>
                    <div>playing</div>
                </div>
                <div className="profileGit">
                    <div><img className="gitHubIcon" src={GitHubIcon} alt="Github Icon" /></div>
                    <div>completed</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LatestGames;
