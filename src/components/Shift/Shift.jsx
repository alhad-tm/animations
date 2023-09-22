import React from 'react'
import css from "./Shift.module.css"
import { useState } from 'react'
import { motion } from 'framer-motion'
import VideoB from "../../assets/Endvideo.mp4"

const Shift = () => {
    const [state,setState]= useState(1)
  return (
    <div className={css.container}>
        <div className={css.div1}>
            <span onClick={()=>setState(1)}>Left</span>
            <span onClick={()=>setState(2)}>Right</span>
        </div>

        <div className={css.div2}>
        {state===1 &&   <motion.div 
         initial={{ opacity: 1,rotate:360}} 
         whileInView={{ opacity: 1, rotate:0}}
          transition={{ duration: 1.5 }}

        className={css.left}>
                <p>hello, i am the left side</p>

            </motion.div>}


       {state===2 &&   <motion.div className={css.right}
        initial={{ opacity: 0, rotate:120}} 
        whileInView={{ opacity: 1, rotate:0}}
         transition={{ duration: 1.5 , }}>
            <p>hello, i am the right side</p>

            </motion.div> }
        </div>

        <div className={css.div4}>
       <video className={css.videoclass} src={VideoB} autoPlay loop muted></video>
        </div>
      
    </div>
  )
}

export default Shift
 