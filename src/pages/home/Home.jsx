import "./Home.css"
import React from "react"
import HeroImg from "../../assets/images/hero-img.png"

const Home = () => {
  const date = new Date()

  return (
    <section className="home">
      <div className=" home-hero">
        <div className="home-hero-container container">
          <div className="hero-left">
            <p>
              <strong>Trending Product in </strong>
            </p>
            <h1>Make Your Interior More Minimalistic & Modern</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a
              aut iure rem, aspernatur esse!
            </p>
            <button>SHOP NOW!</button>
          </div>
          <div className="hero-right">
            <img src={HeroImg} alt={`Hero.png`} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
