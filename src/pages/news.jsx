// Importing necessary modules, components, and assets
import React, { useEffect, useState } from 'react';
import '../components/LatestNews.css';
import LatestNews from '../components/LatestNews';

// Creating a functional component named Main
function News() {

  // Rendering the main component
  return (
    <div>
      <LatestNews />
    </div>

  );
}

// Exporting the Main component as the default export
export default News;
