import "./Home.css"
import React, { useEffect, useState } from "react"
import products from "../../assets/data/products"
import { Link } from "react-router-dom"
import Services from "../../components/services/Services"
import TrendingProducts from "../../components/products/TrendingProducts"
import productImg17 from "../../assets/images/phone-03.png"
import Clock from "../../components/clock/Clock"
import Hero from "../../components/hero/Hero"
import { motion } from "framer-motion"

const Home = () => {
  const [dataTrending, setDataTrending] = useState([])
  const [dataSales, setDataSales] = useState([])
  const [dataNewArrival, setDataNewArrival] = useState([])
  const [dataPopular, setDataPopular] = useState([])
  const scrollTop = () => {
    window.scroll(0, 0)
  }
  useEffect(() => {
    const TrendingProducts = products.filter(
      (product) => product.category === "chair"
    )
    const SalesProducts = products.filter(
      (product) => product.category === "sofa"
    )
    const PopularProducts = products.filter(
      (product) => product.category === "watch"
    )
    const NewArrival = products.filter(
      (product) =>
        product.category === "mobile" || product.category === "wireless"
    )

    setDataTrending(TrendingProducts)
    setDataSales(SalesProducts)
    setDataNewArrival(NewArrival)
    setDataPopular(PopularProducts)
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
      <section className="trending__products" id="trending">
        <h3 className="section-title">Trending Product</h3>
        <TrendingProducts filteredProducts={dataTrending} />
      </section>

      {/* BEST SALES PRODUCT */}
      <section className="sales__products" id="sales">
        <h3 className="section-title">Best Sales Product</h3>
        <TrendingProducts filteredProducts={dataSales} />
      </section>

      <section className="timer" id="timer">
        <div className="ribbon">
          <span>Disc 80%</span>
        </div>
        <div className="container timer-container">
          <div className="timer-left">
            <p>Limited Offers</p>
            <h3>Realme 8 Smartphone</h3>
            <Clock />
            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="shop/12">Buy Now!</Link>
            </motion.button>
          </div>
          <div className="timer-right">
            <img src={productImg17} alt={`${productImg17}.png`} />
          </div>
        </div>
      </section>

      <section className="new__arrival" id="arrival">
        <h3 className="section-title">New Arrival</h3>
        <TrendingProducts filteredProducts={dataNewArrival} />
      </section>

      <section className="popular__products" id="popular">
        <h3 className="section-title">Popular in Category</h3>
        <TrendingProducts filteredProducts={dataPopular} />
      </section>
    </section>
  )
}

export default Home
