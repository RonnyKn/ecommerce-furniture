import "./Home.css"
import React, { useEffect, useState } from "react"
import products from "../../assets/data/products"
import { Link } from "react-router-dom"
import Services from "../../components/services/Services"
import TrendingProducts from "../../components/products/TrendingProducts"
import timerImg from "../../assets/images/counter-timer-img.png"
import Clock from "../../components/clock/Clock"
import Hero from "../../components/hero/Hero"

const Home = () => {
  const [dataTrending, setDataTrending] = useState([])
  const [dataSales, setDataSales] = useState([])
  const [dataNewArrival, setDataNewArrival] = useState([])

  useEffect(() => {
    const TrendingProducts = products.filter(
      (product) => product.category === "chair"
    )
    const SalesProducts = products.filter(
      (product) => product.category === "sofa"
    )
    const NewArrival = products.filter(
      (product) =>
        product.category === "mobile" || product.category === "wireless"
    )
    setDataTrending(TrendingProducts)
    setDataSales(SalesProducts)
    setDataNewArrival(NewArrival)
  }, [])

  return (
    <section className="home">
      <section className=" home-hero">
        <Hero />
      </section>

      <section className="services">
        <h3 className="services-title">Our Services</h3>
        <Services />
      </section>

      {/* TRENDING PRODUCTS */}
      <section className="trending__products">
        <h3 className="section-title">Trending Product</h3>
        <TrendingProducts filteredProducts={dataTrending} />
      </section>

      {/* BEST SALES PRODUCT */}
      <section className="trending__products">
        <h3 className="section-title">Best Sales Product</h3>
        <TrendingProducts filteredProducts={dataSales} />
      </section>

      <section className="timer">
        <div className="ribbon">
          <span>Disc 80%</span>
        </div>
        <div className="container timer-container">
          <div className="timer-left">
            <p>Limited Offers</p>
            <h3>Quality Armchair</h3>
            <Clock />
            <button>
              <Link to="shop">Visit Store</Link>
            </button>
          </div>
          <div className="timer-right">
            <img src={timerImg} alt={`${timerImg}.png`} />
          </div>
        </div>
      </section>

      <section className="new__arrival">
        <h3 className="section-title">New Arrival</h3>
        <TrendingProducts filteredProducts={dataNewArrival} />
      </section>
    </section>
  )
}

export default Home
