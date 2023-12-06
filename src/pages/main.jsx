// Importing necessary modules, components, and assets
import React, { useEffect, useState } from 'react';
import '../pages/main.css';
<<<<<<< HEAD
import Slider from '../components/heroSlider';
import { GetGameData } from '../utils/getGameData';
import AllGames from '../components/allGames';
=======
import Logout from '../components/logout';
import Sidebar from '../components/Sidebar';
import heartIcon from '../images/insta_heart.png';
import commentIcon from '../images/insta_comment.png';
import shareIcon from '../images/insta_share.png';
import saveIcon from '../images/insta_save.png';
import friendsbanner from '../images/friendsbar.png';
import likedIcon from '../images/liked_icons.png';
import smileyIcon from '../images/smileyGrey.png';
import DisplayUsername from '../components/displayUsername';
>>>>>>> 0783c089e7f6537626f8424789559e9aa08325ad

// Creating a functional component named Main
function Main() {
  // Using useState hook to manage various state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [userList, setUserList] = useState([]);
  const [photos, setPhotos] = useState([]);

  // Function to fetch images from an external API using async-await
  async function fetchImages() {
    try {
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  // Utilizing the useEffect hook to trigger the image fetching function once upon component mount
  useEffect(() => {
    fetchImages();
  }, []);

  async function clickHandler() {
   await GetGameData()
  }

  // Rendering the main component
  return (
<<<<<<< HEAD
    <div>
          <Slider></Slider>
          <button onClick={clickHandler} >Press Me</button>
          <AllGames></AllGames>
=======
    <div className="Main">
      <div className="sidebar-wrapper">
        {/* Rendering the Sidebar component */}
        <Sidebar />
      </div>  
      <div className="mainContent">
        <div className="columns-container">
          <div className="left-column">
            <img className="friendsbanner" src={friendsbanner} alt="Friends Row" />
            {/* Conditional rendering based on the availability of photos */}
            {photos.length > 0 ? (
              // Mapping through the photos array and rendering individual cards for each photo
              photos.map((item, index) => (
                <div className="card" key={index}>
                  {/* Displaying author and time */}
                  <div className="avatarBox">
                    <img className="avatar" src="https://picsum.photos/200/300" alt="Avatar" />
                    <span><p>{item.author} • 1 d</p></span>
                  </div>
                  {/* Displaying the uploaded image */}
                  <img className="uploadImage" src={item.download_url} alt="Uploaded Image" />
                  {/* Icon buttons for interaction */}
                  <div className="iconBox">
                    <div className="interactButtons">
                      <img className="icon" src={heartIcon} alt="Heart Icon" />
                      <img className="icon" src={commentIcon} alt="Comment Icon" />
                      <img className="icon" src={shareIcon} alt="Share Icon" />
                    </div>
                    <div className="saveButton">
                      <img className="icon" src={saveIcon} alt="Save Icon" />
                    </div>
                  </div>
                  {/* Section showing who liked the post */}
                  <div className="likedBy">
                    <div>
                      <img className="likedIcon" src={likedIcon} alt="Liked Icon" />
                    </div>
                    <div>
                      <p>Liked by sonicthehedgehog and others</p>
                    </div>
                  </div>
                  {/* Section displaying comments */}
                  <div className="commentBox">
                    <div>
                      <p><strong>chester_bid</strong>🎄✨ A glimpse into Wonderland ✨🎅🏼</p>
                      <h1>hello</h1>
                      <DisplayUsername 
                        setLoggedIn={setLoggedIn}
                       />
                    </div>
                  </div>
                  {/* Section for adding comments */}
                  <div className="addCommentBox">
                    <div>
                      <p>...</p>
                      <p>more</p>
                      <p>Add a comment...</p>
                    </div>
                    <div>
                      <img className="smileyIcon" src={smileyIcon} alt="Smiley Icon" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Displaying a loading message while images are being fetched
              <p>Loading...</p>
            )}
          </div>
          {/* Rendering the Logout component in the right column */}
          <div className="right-column">
            <Logout
              setRegistered={setRegistered}
              setLoggedIn={setLoggedIn}
              setUserList={setUserList}
              setEmail={setEmail}
            />
          </div>
        </div>
      </div>
>>>>>>> 0783c089e7f6537626f8424789559e9aa08325ad
    </div>

  );
}

// Exporting the Main component as the default export
export default Main;
