import React, { useState, useEffect } from 'react';
import '../heroSlider.css';
import slider1 from '../images/ACMirage.jpg';
import slider2 from '../images/CODMW3.jpg';
import slider3 from '../images/FC24.jpg';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [slider1, slider2, slider3];

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide}
            alt={`Slide ${idx + 1}`}
            className="slide"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
