import "./Checkout.css"
import React from "react"
import { useSelector } from "react-redux"
import { selectCartItems, selectTotalAmount } from "../../redux/slice/cartSlice"
import { toast } from "react-toastify"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import CartEmpty from "../../components/cart/CartEmpty"
import CheckOutItems from "../../components/checkOutItems/CheckOutItems"

const Checkout = () => {
  const dataCartItems = useSelector(selectCartItems)
  const dataSubtotal = useSelector(selectTotalAmount)

  return (
    <section className="checkout">
      <h3 className="checkout-title container">Check Out</h3>
      <div className="container checkout-container">
        <div className="checkout-left">
          <form>
            <p>Fill your data to proced Shipping</p>
            <label>Full Name</label>
            <input type="text" />
            <label>Address</label>
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
            <div className="subtotal">
              <h3>
                TOTAL : $ <span>{dataSubtotal}</span>
              </h3>
            </div>
          </form>
        </div>
        <div className="checkout-right">
          {dataCartItems.length === 0 ? (
            <CartEmpty />
          ) : (
            <CheckOutItems cartItems={dataCartItems} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Checkout
