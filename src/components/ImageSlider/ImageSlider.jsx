import React, { useState } from "react";
import "./ImageSlider.css";

const images = [
  "cars1.png",
  "cars2.png",
  "cars3.png",
  // Add more image file names as needed
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotated, setIsRotated] = useState(false);

  const handleNextClick = () => {
    setIsRotated(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsRotated(false);
    }, 500); // Adjust the transition duration as needed
  };

  return (
    <div className={`slider ${isRotated ? "rotated" : ""}`}>
      <div className="slider-inner">
        <img
          src={require(`../../assets/${images[currentIndex]}`)}
          alt={`Image ${currentIndex + 1}`}
        />
        <div className="slider-button">
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div> 
    </div>
  ); 
};

export default ImageSlider;
