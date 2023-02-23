import "./ProductDetails.css"
import React from "react"
import { useParams } from "react-router-dom"
import products from "../../assets/data/products"
import { motion } from "framer-motion"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { setAddItems } from "../../redux/slice/cartSlice"

const ProductDetails = () => {
  const dispatch = useDispatch()
  const addToCart = () => {
    const item = { id, productName, price, imgUrl }
    dispatch(setAddItems(item))
  }
  const { id } = useParams()
  const product = products.find((item) => item.id === id)
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    category,
  } = product

  return (
    <section className="product__details">
      <div className="container product__details-container">
        <div className="product__details-left">
          <img src={imgUrl} alt={`${imgUrl}.png`} />
        </div>
        <div className="product__details-right">
          <h3>~{productName}~</h3>
          <div className="product__details-ratings">
            <p>
              ( <span>{avgRating}</span> ratings )
            </p>
          </div>
          <div className="product__details-price">
            <h5>$ {price}</h5>
            <p>
              Category: <span>{category.toUpperCase()}</span>
            </p>
          </div>
          <p className="product__details-description">{description}</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            className="btn"
            onClick={addToCart}
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
            }}
          >
            <AiOutlineShoppingCart size="1.5em" /> Add To Cart
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
