import React from "react"
import { Link } from "react-router-dom"
import { IoArrowBackOutline } from "react-icons/io5"

const CartCount = ({ dataQty }) => {
  return (
    <div className="cart-count">
      <button type="button" className="btn">
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
      </button>
      <h3>
        Your Cart : <span>{dataQty}</span> items
      </h3>
    </div>
  )
}

export default CartCount
