import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../../assets/logo.svg";
import rightArrow from "../../assets/cars1.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="Testimonials" id="testimonials">
      <div className="left-t">
        <span>Reviews</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <motion.span 
           initial={{ opacity: 0, y:130 }} 
           whileInView={{ opacity: 1, y:0 }}
            transition={{ duration: 3.5 }}
          style={{ color: "red" }}>
            {testimonialsData[selected].name}
          </motion.span>{" "}
          -{testimonialsData[selected].status}
        </span> 
      </div>
      <div className="right-t">
        <div></div>

        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((val) => val - 1); 
            }}
            src={leftArrow}
            alt=""
          />

          <img
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((val) => val + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;