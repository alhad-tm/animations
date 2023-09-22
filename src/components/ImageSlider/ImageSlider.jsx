import React, { useState } from "react";
import "./ImageSlider.css";

const images = [
  "card1.png",
  "card2.png",
//   "card1.png",
  // Add more image file names as needed
];
const text=[
    "hello car 1", "hello car 2", "hello car 3"
]

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentInd, setCurrentInd] = useState("hi");
  const [isRotated, setIsRotated] = useState(false);

  const handleNextClick = () => {
    setIsRotated(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsRotated(false);
    }, 500); // Adjust the transition duration as needed
  };

  return (
    <div className="container">
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

      <h1>{text.currentInd}</h1>
    </div>
    </div>
  ); 
};

export default ImageSlider;
