import React, { useEffect, useState } from 'react';
import css from "./VerticalProgressBar.css"

function VerticalProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - windowHeight;
      const percentage = (scrollY / totalHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', updateScrollPercentage);

    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
    };
  }, []);

  return (
    <div className="vertical-progress-container">
      <div
        className="vertical-progressh"
        style={{ height: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
}

export default VerticalProgressBar;
