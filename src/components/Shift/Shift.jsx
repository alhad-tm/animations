import React from 'react'
import css from "./Shift.module.css"
import { useState } from 'react'
import { motion } from 'framer-motion'

const Shift = () => {
    const [state,setState]= useState(0)
  return (
    <div className={css.container}>
        <div className={css.div1}>
            <span onClick={()=>setState(1)}>Left</span>
            <span onClick={()=>setState(2)}>Right</span>
        </div>

        <div className={css.div2}>
        {state===1 &&   <motion.div 
         initial={{ opacity: 0, y:130 ,rotate:360}} 
         whileInView={{ opacity: 1, y:0 ,rotate:0}}
          transition={{ duration: 3.5 }}

        className={css.left}>
                <p>hello, i am the left side</p>

            </motion.div>}


       {state===2 &&   <motion.div className={css.right}
        initial={{ opacity: 0, y:30 }} 
        whileInView={{ opacity: 1, y:0 }}
         transition={{ duration: 1.5 }}>
            <p>hello, i am the right side</p>

            </motion.div> }
        </div>
      
    </div>
  )
}

export default Shift
