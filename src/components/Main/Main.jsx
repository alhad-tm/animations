import React from 'react'
import css from "./Main.module.css"
import { motion, useScroll } from 'framer-motion'

const Main = () => {
     const { scrollYProgress } = useScroll();
  return (

   

   
    <div className={css.container}>

<motion.div style={{ scaleX: scrollYProgress }} />  
        <div className={css.container1}>

        <motion.div className={css.cleft}
       initial={{ opacity: 0, scale: 0.8 }} 
       whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        >
      <h1>this is the first line</h1>
      <h2>this is the second line</h2>
        </motion.div>


        <div className={css.cright}>
            <h1>right line</h1>
            <h2>second line</h2> 

        </div>
        </div>

        <motion.div className={css.container2}
         
        >
            <motion.h1
             initial={{ opacity: 0, y:30 }}
             whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 2.3 }}
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam temporibus aliquid eius voluptas eaque
                 doloribus sapiente odio voluptatum eveniet cumque repellat rem quaerat, inventore sint dignissimos tempore 
                 recusandae beatae laborum?</motion.h1>
            <motion.p
             initial={{ opacity: 0, y:30 }}
             whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 2.3 }}
            
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati vel officia officiis natus, 
                dolorem at quisquam corrupti nisi veritatis dolores facere quae porro, minus voluptatum, quia consequatur
                 amet magnam.</motion.p>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda alias, adipisci quos repellendus magnam atque officiis sed amet qui, beatae temporibus. Repudiandae quod fugiat alias tempora, perferendis debitis odit excepturi.</h1>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda alias, adipisci quos repellendus magnam atque officiis sed amet qui, beatae temporibus. Repudiandae quod fugiat alias tempora, perferendis debitis odit excepturi.</h1>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda alias, adipisci quos repellendus magnam atque officiis sed amet qui, beatae temporibus. Repudiandae quod fugiat alias tempora, perferendis debitis odit excepturi.</h1>
           
             </motion.div>
      
    </div>
  )
}

export default Main
