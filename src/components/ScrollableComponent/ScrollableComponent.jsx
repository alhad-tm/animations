import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useViewportScroll } from 'framer-motion';
import css from "./ScrollableComponent.module.css"

function ScrollableComponent() {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const controls = useAnimation();
  const [scrollbarHeight, setScrollbarHeight] = useState(0);

  // Calculate scrollableHeight based on content and container height
  useEffect(() => {
    const contentHeight = document.querySelector('.content').clientHeight;
    const containerHeight = document.querySelector('.scrollable-container').clientHeight;
    setScrollbarHeight((containerHeight / contentHeight) * containerHeight);
  }, []);

  scrollY.onChange((latest) => {
    controls.start({ y: latest * -scrollbarHeight });
  });

  const handleScrollbarDrag = (_, info) => {
    const newScrollY = -info.point.y / scrollbarHeight;
    scrollY.set(newScrollY);
  };

  return (
    <div className={css.scrollablecontainer}>
      <div className={css.content}>
        {/* Content that exceeds the container height */}
        {Array.from({ length: 20 }, (_, index) => (
          <div key={index} className="content-item">
            Content Item {index + 1}
          </div>
        ))}
      </div>
      <motion.div
        className="scrollbar"
        style={{ height: `${scrollbarHeight}px` }}
        drag="y"
        dragConstraints={{ top: 0, bottom: scrollbarHeight }}
        dragElastic={0}
        onDrag={handleScrollbarDrag}
        onDragEnd={(_, info) => handleScrollbarDrag(_, info)}
        animate={controls}
      ></motion.div>
    </div>
  );
}

export default ScrollableComponent;
