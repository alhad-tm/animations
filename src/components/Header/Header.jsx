import React, { useState } from 'react'
import css from "./Header.module.css"
import { motion } from "framer-motion"
// import Logo1 from "../../assets/Green castel logo new.svg"
// import Bars from "../../assets/Bars.svg"
// import { Link } from 'react-scroll'
// import Close from "../../assets/close.png"
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false); 

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  
  return (
    <div className={css.container}>
        <motion.nav
      animate={menuOpened ? "open" : "closed"}
      variants={variants}
    >
     
    </motion.nav>
        <div className={css.right}>


        {menuOpened === false && mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <img className={css.bars}
            src=""
            alt=""
           
          />
        </div>
      ) : (
        <ul className={css.rightlist} onClick={()=>setMenuOpened(false)}>
        {mobile? <div className={css.main}>
          <div className={css.m1}> <img src="" alt="" />  </div>
          <div className={css.m2}> <img src="" alt="" /></div>
           </div>:""}
            <span>about</span>
            <span>service</span> 
            <span>contact</span>
              
            </ul>)}
            </div>
      
    </div>
  )
}

export default Header