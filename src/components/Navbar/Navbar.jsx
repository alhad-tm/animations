import React, { useState } from 'react'
import { motion } from "framer-motion"

import css from "./Navbar.module.css"

const Navbar = () => {
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }
    const [isOpen, setIsOpen] = useState(false) 
  return (
    <div className={css.contain}>
         <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <div onClick={() => setIsOpen(isOpen => !isOpen)} >
        <span>hey</span>
        </div>
     <h1>hi</h1>
    </motion.nav>
      
    </div>
  )
}

export default Navbar
