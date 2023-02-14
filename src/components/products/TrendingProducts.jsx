import "./Products.css"
import React, { useEffect, useState } from "react"
import products from "../../assets/data/products"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { AiOutlinePlusCircle } from "react-icons/ai"

const TrendingProducts = () => {
  const [data, setData] = useState(products)

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === "chair"
    )
    setData(filteredProducts)
  }, [])

  return (
    <section className="trending__products">
      <h3 className="trending__products-title">Trending Products</h3>
      <div className="container trending__products-container">
        {data.map((val, idx) => (
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
                <AiOutlinePlusCircle size="1.8em" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrendingProducts
