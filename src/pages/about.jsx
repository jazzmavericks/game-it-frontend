// Importing necessary modules and components
import React, { useEffect, useState } from 'react';
import ProfilePic from '../images/profile_pic.jpg';
import LinkedInIcon from '../images/linkedinicon.png';
import WebsiteIcon from '../images/website.png';
import EmailIcon from '../images/emailicon.png';
import GitHubIcon from '../images/githubicon.png';
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
                    <img className="profilePic" src={ProfilePic} alt="Profile Picture" />
                </div>
                <div className="profileName">
                    James Powley
                </div>
                <div className="profileText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique, ligula ut lacinia condimentum, velit augue hendrerit lorem, at varius orci purus quis est. Quisque sollicitudin rutrum nisl, sit amet molestie nibh aliquam at. Proin eu dolor sodales, fermentum nibh et, interdum justo. Vivamus vehicula vulputate nisi, vitae vestibulum dui ullamcorper sit amet.
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
                    <img className="profilePic" src={ProfilePic} alt="Profile Picture" />
                </div>
                <div className="profileName">
                    Luca Camillo
                </div>
                <div className="profileText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique, ligula ut lacinia condimentum, velit augue hendrerit lorem, at varius orci purus quis est. Quisque sollicitudin rutrum nisl, sit amet molestie nibh aliquam at. Proin eu dolor sodales, fermentum nibh et, interdum justo. Vivamus vehicula vulputate nisi, vitae vestibulum dui ullamcorper sit amet.
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
                    <img className="profilePic" src={ProfilePic} alt="Profile Picture" />
                </div>
                <div className="profileName">
                    Aleasa Awan
                </div>
                <div className="profileText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique, ligula ut lacinia condimentum, velit augue hendrerit lorem, at varius orci purus quis est. Quisque sollicitudin rutrum nisl, sit amet molestie nibh aliquam at. Proin eu dolor sodales, fermentum nibh et, interdum justo. Vivamus vehicula vulputate nisi, vitae vestibulum dui ullamcorper sit amet.
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
                    <img className="profilePic" src={ProfilePic} alt="Profile Picture" />
                </div>
                <div className="profileName">
                    Mark Duffy
                </div>
                <div className="profileText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique, ligula ut lacinia condimentum, velit augue hendrerit lorem, at varius orci purus quis est. Quisque sollicitudin rutrum nisl, sit amet molestie nibh aliquam at. Proin eu dolor sodales, fermentum nibh et, interdum justo. Vivamus vehicula vulputate nisi, vitae vestibulum dui ullamcorper sit amet.
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
