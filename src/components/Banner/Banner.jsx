import React from 'react'
import css from "./Banner.module.css"
import Logo from "../../assets/logo.svg"

const Banner = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
      <div className={css.left}>
        <img src={Logo} alt="" />
      </div>

      <div className={css.right}>
        <span>Register</span>
      </div>
      </div>
    </div>
  )
}

export default Banner
