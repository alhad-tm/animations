import React, { useState } from 'react'
import css from "./ScrollableComponent.module.css"
import { useEffect } from 'react';

const ScrollableComponent = () => {

    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
      const scrollableContainer = document.querySelector('.scrollable-container');
      if (scrollableContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
        const newScrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollPercentage(newScrollPercentage);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={css.scrollablecontainer}>
        {/* Content that exceeds the container height */}
        {Array.from({ length: 20 }, (_, index) => (
          <div key={index} className="content-item">
            Content Item {index + 1}
          </div>
        ))}

        <h1>hello</h1>
        <div className={css.progressbar} style={{ height: `${scrollPercentage}%` }}></div>
      </div>)
}

export default ScrollableComponent
 