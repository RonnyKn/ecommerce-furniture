import "./Checkout.css"
import React from "react"
import { useSelector } from "react-redux"
import { selectCartItems, selectTotalAmount } from "../../redux/slice/cartSlice"
import { toast } from "react-toastify"
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import CartEmpty from "../../components/cart/CartEmpty"
import CheckOutItems from "../../components/checkOutItems/CheckOutItems"

const Checkout = () => {
  const dataCartItems = useSelector(selectCartItems)
  const dataSubtotal = useSelector(selectTotalAmount)
  const navigate = useNavigate()

  function handleSubmit() {
    navigate("/home")
  }

  return (
    <section className="checkout">
      <h3 className="checkout-title container">Check Out</h3>
      <div className="container checkout-container">
        <div className="checkout-left">
          <form
            onSubmit={() => {
              handleSubmit()
              toast.success("Order Process Succesfully")
            }}
          >
            <strong>Fill your data to complete your Shipping</strong>
            <em>(*) Required</em>
            <label>Full Name*</label>
            <input type="text" required />
            <label>E-mail*</label>
            <input type="email" required />
            <label>Phone*</label>
            <input type="number" required />
            <label>Address*</label>
            <textarea required />

            <motion.button
              type="submit"
              className="btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Order Now!
            </motion.button>
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
