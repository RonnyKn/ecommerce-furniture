import "./Checkout.css"
import React from "react"
import CartItems from "../../components/cart/CartItems"
import { useSelector } from "react-redux"
import { selectCartItems } from "../../redux/slice/cartSlice"
import { toast } from "react-toastify"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import CartEmpty from "../../components/cart/CartEmpty"

const Checkout = () => {
  const dataCartItems = useSelector(selectCartItems)
  return (
    <section className="checkout">
      <div className="container checkout-container">
        <div className="checkout-left">
          <form>
            <p>Fill your data to proced Shipping</p>
            <label>Full Name</label>
            <input type="text" />
            <label>Adress</label>
            <textarea />
            <label>Phone</label>
            <input type="number" />
            <Link to="/home">
              <motion.button
                type="button"
                className="btn"
                onClick={() => toast.success("Order Process Succesfully")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Order Now!
              </motion.button>
            </Link>
            <Link to="/cart">
              <motion.button
                className="btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Back to Cart
              </motion.button>
            </Link>
          </form>
        </div>
        <div className="checkout-right">
          {dataCartItems.length === 0 ? (
            <CartEmpty />
          ) : (
            <CartItems cartItems={dataCartItems} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Checkout
