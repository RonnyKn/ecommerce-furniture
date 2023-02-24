import "./ProductDetails.css"
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import products from "../../assets/data/products"
import { motion } from "framer-motion"
import { AiOutlineShoppingCart } from "react-icons/ai"
import userIcon from "../../assets/images/user-icon.png"
import { useDispatch } from "react-redux"
import { setAddItems } from "../../redux/slice/cartSlice"

const ProductDetails = () => {
  const dispatch = useDispatch()
  const addToCart = () => {
    const item = { id, productName, price, imgUrl }
    dispatch(setAddItems(item))
  }
  const { id } = useParams()
  const [tab, setTab] = useState("desc")
  const product = products.find((item) => item.id === id)
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    shortDesc,
    description,
    category,
  } = product

  return (
    <section className="product__details">
      <section className="product__details-hero">
        <h1 style={{ color: "#fff" }}>~{productName}~</h1>
      </section>

      <section className="container product__details-container">
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
          <p className="product__details-description">{shortDesc}</p>
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
      </section>

      <section className="product__details-tab container">
        <div className="tab-title ">
          <span
            className={`${tab === "desc" ? "btn btn-tab" : ""}`}
            onClick={() => setTab("desc")}
          >
            Description
          </span>
          <span
            className={`${tab === "rev" ? "btn btn-tab" : ""}`}
            onClick={() => setTab("rev")}
          >
            Reviews ({reviews.length})
          </span>
        </div>
        <div className="tab-content">
          {tab === "desc" && <p>{description}</p>}
          {tab === "rev" &&
            reviews.map((review, idx) => (
              <div className="content-reviews" key={idx}>
                <img src={userIcon} alt={`userIcon.png`} />
                <div>
                  <div>
                    <span>Anonymous</span>
                    <p className="reviews-rating">
                      ( <span>{review.rating}</span> ratings )
                    </p>
                  </div>
                  <p className="reviews-text">{review.text}</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </section>
  )
}

export default ProductDetails
