// Importing necessary modules and components
import React, { useEffect, useState } from 'react';
import ProfilePic from '../images/profile_pic.jpg';
import LinkedInIcon from '../images/linkedinicon.png';
import WebsiteIcon from '../images/website.png';
import EmailIcon from '../images/emailicon.png';
import GitHubIcon from '../images/githubicon.png';
import Mark from '../images/Mark.jpg';
import James from '../images/James.jpg';
import Luca from '../images/Luca.jpg';
import Aleasa from '../images/aleasa.jpg';
import TeamLogo from '../images/team-logo.png';
import './about.css';

// Creating a functional component named About
function About() { 
    // Rendering the About component
  return (
    <div className="mainLayout">
        <div className="heroImage">
        <div className="overlay"></div>
            <img className="team-logo" src={TeamLogo} alt="Team Logo" />
        </div>
        <div className="aboutText">
            <h2>Introducing ===</h2>
            <p>Otherwise read as Equals equals Equals, we are a team of developers who work by the ethos that we are all equal, and work on all projects equally.</p>
            <p>In JavaScript, the operator "===" is referred to as the Strict Equality operator, and basically means that "This must be exactly this".</p> 
            <p>We feel it perfectly represents our ethos as colleagues, and also reflects the quality of our output based on requirements</p>
        </div>
        <div className="profileSection">
            <div className="profileCard">
                <div className="profileImage">
                    <img className="profilePic" src={James} alt="Profile Picture" />
                </div>
                <div className="profileName">
                    James Powley
                </div>
                <div className="profileText">
                    Coming from a background in the world of E-Games, I have a huge interest in the gaming world. I got into Codenation to develop my coding skills, and have worked through the course to better my future in E-Sports. My skills lay in coding and development.
                </div>
                <div className="profileLinks">
                    <div className="profileEmail">
                        <div><img className="emailIcon" src={EmailIcon} alt="Email Icon" /></div>
                        <div>email</div>
                    </div>
                    <div className="profileSite">
                        <div><img className="websiteIcon" src={WebsiteIcon} alt="Website Icon" /></div>
                        <div>website</div>
                    </div>
                    <div className="profileLinkedIn">
                        <div><img className="linkedInIcon" src={LinkedInIcon} alt="LinkedIn Icon" /></div>
                        <div>linkedin</div>
                    </div>
                    <div className="profileGit">
                        <div><img className="gitHubIcon" src={GitHubIcon} alt="Github Icon" /></div>
                        <div>Github</div>
                    </div>
                </div>
            </div>
            <div className="profileCard">
                <div className="profileImage">
                    <img className="profilePic" src={Luca} alt="Profile Picture" />
                </div>
                <div className="profileName">
                    Luca Camillo
                </div>
                <div className="profileText">
                    I came into Codenation having never coded a line in my life, and I'm now sitting here with an amazing project. The skills I have built up will propel me through my future career. I've LOVED this journey.
                </div>
                <div className="profileLinks">
                    <div className="profileEmail">
                        <div><img className="emailIcon" src={EmailIcon} alt="Email Icon" /></div>
                        <div>email</div>
                    </div>
                    <div className="profileSite">
                        <div><img className="websiteIcon" src={WebsiteIcon} alt="Website Icon" /></div>
                        <div>website</div>
                    </div>
                    <div className="profileLinkedIn">
                        <div><img className="linkedInIcon" src={LinkedInIcon} alt="LinkedIn Icon" /></div>
                        <div>linkedin</div>
                    </div>
                    <div className="profileGit">
                        <div><img className="gitHubIcon" src={GitHubIcon} alt="Github Icon" /></div>
                        <div>Github</div>
                    </div>
                </div>
            </div>
            <div className="profileCard">
                <div className="profileImage">
                    <img className="profilePic" src={Aleasa} alt="Profile Picture" />
                </div>
                <div className="profileName">
                    Aleasa Awan
                </div>
                <div className="profileText">
                    New to coding, but always willing to try something new, I leapt into Codenation blindly. The skills that I have learned and the existing ones I have which have been propelled - I feel ready to tke on anything.
                </div>
                <div className="profileLinks">
                    <div className="profileEmail">
                        <div><img className="emailIcon" src={EmailIcon} alt="Email Icon" /></div>
                        <div>email</div>
                    </div>
                    <div className="profileSite">
                        <div><img className="websiteIcon" src={WebsiteIcon} alt="Website Icon" /></div>
                        <div>website</div>
                    </div>
                    <div className="profileLinkedIn">
                        <div><img className="linkedInIcon" src={LinkedInIcon} alt="LinkedIn Icon" /></div>
                        <div>linkedin</div>
                    </div>
                    <div className="profileGit">
                        <div><img className="gitHubIcon" src={GitHubIcon} alt="Github Icon" /></div>
                        <div>Github</div>
                    </div>
                </div>
            </div>
            <div className="profileCard">
                <div className="profileImage">
                    <img className="profilePic" src={Mark} alt="Profile Picture" />
                </div>
                <div className="profileName">
                    Mark Duffy
                </div>
                <div className="profileText">
                    I entered this course with a background of web design, but had zero experience of javascript, react or any backend. I totally feel comfortable with all now. Ready for more!
                </div>
                <div className="profileLinks">
                    <div className="profileEmail">
                        <div><img className="emailIcon" src={EmailIcon} alt="Email Icon" /></div>
                        <div>email</div>
                    </div>
                    <div className="profileSite">
                        <div><img className="websiteIcon" src={WebsiteIcon} alt="Website Icon" /></div>
                        <div>website</div>
                    </div>
                    <div className="profileLinkedIn">
                        <div><img className="linkedInIcon" src={LinkedInIcon} alt="LinkedIn Icon" /></div>
                        <div>linkedin</div>
                    </div>
                    <div className="profileGit">
                        <div><img className="gitHubIcon" src={GitHubIcon} alt="Github Icon" /></div>
                        <div>Github</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

// Exporting the About component as the default export
export default About;
