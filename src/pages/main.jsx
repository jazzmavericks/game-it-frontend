// Importing necessary modules, components, and assets
import React, { useEffect, useState } from 'react';
import '../pages/main.css';
import Slider from '../components/heroSlider';
import { GetGameData } from '../utils/getGameData';
import AllGames from '../components/allGames';

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
    <div>
          <Slider></Slider>
    </div>

  );
}

// Exporting the Main component as the default export
export default Main;
