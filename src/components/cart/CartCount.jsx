import React from "react"
import { Link } from "react-router-dom"
import { IoArrowBackOutline } from "react-icons/io5"
import { motion } from "framer-motion"

const CartCount = ({ dataQty }) => {
  return (
    <div className="cart-count">
      <motion.button
        type="button"
        className="btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          to="/shop"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".3rem",
          }}
        >
          <IoArrowBackOutline size="1.8em" />
          Back to Shop
        </Link>
      </motion.button>
      <h3>
        Your Cart :
        <em>
          <span> {dataQty}</span> items
        </em>
      </h3>
    </div>
  )
}

export default CartCount
