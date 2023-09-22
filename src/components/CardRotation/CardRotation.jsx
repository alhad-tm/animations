import React, { useState } from "react";
import "./CardRotation.css";

const cardData = [
  "Card 1 Content",
  "Card 2 Content",
  "Card 3 Content",
  // Add more card content as needed
];

const CardRotation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotated, setIsRotated] = useState(false);

  const handleNextClick = () => {
    setIsRotated(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
      setIsRotated(false);
    }, 500); // Adjust the transition duration as needed
  };

  return (
    <div className={`card ${isRotated ? "rotated" : ""}`}>
      <div className="card-inner">
        <div className="card-front">
          {cardData[currentIndex]}
        </div>
        <div className="card-back">
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default CardRotation;
