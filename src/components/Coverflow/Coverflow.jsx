import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import C1 from "../../assets/card1.png"
import C2 from "../../assets/card2.png"
import css from "./Coverflow.module.css"

import 'swiper/css';
import "swiper/css/effect-coverflow";
// import 'swiper/css/effect-cards';
import 'swiper/css/pagination';




import { Pagination, EffectCoverflow } from "swiper/modules";

const Coverflow = () => {
  return (
    <div className={css.container}>
        <Swiper className={css.swiperdiv}
        	effect= {'coverflow'}
            loop= {true}
		centeredSlides= {true}
        pagination={{clickable:true}}
        modules={[EffectCoverflow, Pagination]}
		slidesPerView={1}
        spaceBetween={40}
		coverflowEffect={{
			rotate: -360,
			// stretch: 80,
			// depth: 200,
			modifier: 1, // 2,3
			slideShadows : false,}}
            speed={2500}

            > 
                <SwiperSlide>
                    <div className={css.box}>
                    <img className={css.img} src={C1} alt="" />
                    </div>
                   
                </SwiperSlide>
                <SwiperSlide>
                <div className={css.box}>
                    <img className={css.img} src={C2} alt="" /> 
                    </div>
                </SwiperSlide>


        </Swiper>
      
    </div>
  )
}

export default Coverflow
