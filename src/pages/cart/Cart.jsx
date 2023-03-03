import React, { useEffect } from "react"
import {
  selectCartItems,
  selectTotalAmount,
  selectTotalQty,
  setGetTotal,
} from "../../redux/slice/cartSlice"
import "./Cart.css"
import { useDispatch, useSelector } from "react-redux"
import CartCount from "../../components/cart/CartCount"
import CartItems from "../../components/cart/CartItems"
import CartEmpty from "../../components/cart/CartEmpty"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Cart = () => {
  const dispatch = useDispatch()
  const dataCartItems = useSelector(selectCartItems)
  const dataSubtotal = useSelector(selectTotalAmount)
  const dataQty = useSelector(selectTotalQty)
  const scrollTop = () => {
    window.scroll(0, 0)
  }

  useEffect(() => {
    dispatch(setGetTotal())
  }, [dataCartItems, dispatch])

  return (
    <section className="cart">
      <div className="container cart-container">
        <div className="cart-count">
          <CartCount dataQty={dataQty} />
        </div>

        <div className="cart-items-container">
          {dataCartItems.length === 0 ? (
            <CartEmpty />
          ) : (
            <>
              <CartItems cartItems={dataCartItems} />

              <div
                style={{ width: "fit-content", margin: "0 auto" }}
                onClick={scrollTop}
              >
                <Link to="/checkout" style={{ width: "fit-content" }}>
                  <motion.div
                    className="subtotal"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <h4>Checkout Here!</h4>
                    <h3>
                      TOTAL : $ <span>{dataSubtotal}</span>
                    </h3>
                  </motion.div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Cart
