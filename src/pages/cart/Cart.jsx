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

  useEffect(() => {
    dispatch(setGetTotal())
  }, [dataCartItems, dispatch])

  return (
    <section className="cart">
      <div className="container cart-container">
        <div className="cart-count">
          <CartCount dataQty={dataQty} />
        </div>

        <div className="cart-items">
          {dataCartItems.length === 0 ? (
            <CartEmpty />
          ) : (
            <>
              <div className="cartitems">
                <CartItems cartItems={dataCartItems} />
              </div>
              <Link to="/checkout">
                <motion.div
                  className="subtotal"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <h5>Checkout now!</h5>
                  <h3>
                    SUBTOTAL : $<span>{dataSubtotal}</span>
                  </h3>
                </motion.div>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Cart
