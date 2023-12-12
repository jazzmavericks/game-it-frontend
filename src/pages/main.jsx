// Importing necessary modules, components, and assets
import React, { useEffect, useState } from 'react';
import '../pages/main.css';
import Slider from '../components/heroSlider';
import { GetGameData } from '../utils/getGameData';
import AllGames from '../components/allGames';
import LatestNews from '../components/LatestNews';


// Creating a functional component named Main
function Main(props) {
  console.log(props);
  console.log(props.email);
  
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
      <LatestNews />
    </div>

  );
}

// Exporting the Main component as the default export
export default Main;
