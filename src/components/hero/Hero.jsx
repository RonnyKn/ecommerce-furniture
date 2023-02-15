import React from "react"
import HeroImg from "../../assets/images/hero-img.png"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Hero = () => {
  const year = new Date().getFullYear()
  return (
    <div className="home-hero-container container">
      <div className="hero-left">
        <strong>Trending Product in {year} </strong>
        <h1>Make Your Interior More Minimalistic & Modern</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a aut
          iure rem, aspernatur esse!
        </p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
          <Link to="shop">SHOP NOW!</Link>
        </motion.button>
      </div>
      <div className="hero-right">
        <img src={HeroImg} alt={`Hero.png`} />
      </div>
    </div>
  )
}

export default Hero
