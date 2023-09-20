import React from 'react'
import css from "./Cards.module.css"
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-flip';
// import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import {  Pagination,EffectFlip} from "swiper/modules";

import Cars1 from "../../assets/cars1-removebg-preview.png"
import Cars2 from "../../assets/cars2-removebg-preview.png"
import Cars3 from "../../assets/cars3-removebg-preview.png"



// import './styles.css';

const Cards = () => {
  return (
    <div className={css.container}>

        <motion.div className={css.card1}
         whileHover={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ duration: 3.5 }}>

        </motion.div>

        <div className={css.div2}>
        <Swiper className={css.swiperdiv}
        effect={'flip'}
        // effect={'cards'}
        grabCursor={true}
        pagination={{clickable:true}}
        loop={true}
        slidesPerView={1}
       
        modules={[EffectFlip, Pagination]}
        //  modules={[EffectCards,Pagination]}
      >
        <SwiperSlide>
              {/* <div className={css.box1}>   */}
             <img src={Cars1} alt=''/>
              {/* </div> */}
        </SwiperSlide>
        <SwiperSlide>
              {/* <div className={css.box2}>  */}
              <img src={Cars2} alt=''/>
              {/* </div> */}
        </SwiperSlide>
        <SwiperSlide>
              {/* <div className={css.box3}> */}
              <img src={Cars3} alt=''/>
                {/* </div> */}
        </SwiperSlide>
        </Swiper>

        </div> 

        <div className={css.div3}>
          
        </div>
      
    </div>
  )
}

export default Cards
