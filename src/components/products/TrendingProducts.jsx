import "./Products.css"
import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { BsFillPlusCircleFill } from "react-icons/bs"

const TrendingProducts = ({ dataTrending }) => {
  return (
    <section className="trending__products">
      <h3 className="trending__products-title">Trending Products</h3>
      <div className="container trending__products-container">
        {dataTrending.map((val, idx) => (
          <div className="trending" key={idx}>
            <Link to="shop:id">
              <motion.img
                whileHover={{ scale: 0.9 }}
                src={val?.imgUrl}
                alt={`${val?.imgUrl}.png`}
              />
            </Link>
            <h5>
              <Link to="shop:id">{val?.productName}</Link>
            </h5>
            <p className="trending-category">{val?.category}</p>
            <div className="trending-cart">
              <p>
                <strong> $ {val?.price}</strong>
              </p>
              <button>
                <BsFillPlusCircleFill size="1.8em" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrendingProducts
