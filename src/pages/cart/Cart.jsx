import React, { useEffect } from "react"
import {
  selectCartItems,
  selectTotalAmount,
  setGetTotal,
} from "../../redux/slice/cartSlice"
import "./Cart.css"
import { useDispatch, useSelector } from "react-redux"
import CartCount from "../../components/cart/CartCount"
import CartItems from "../../components/cart/CartItems"
import CartEmpty from "../../components/cart/CartEmpty"

const Cart = () => {
  const dispatch = useDispatch()
  const dataCartItems = useSelector(selectCartItems)
  const dataSubtotal = useSelector(selectTotalAmount)

  useEffect(() => {
    dispatch(setGetTotal())
  }, [dataCartItems, dispatch])

  return (
    <section className="cart">
      <div className="container cart-container">
        <div className="cart-count">
          <CartCount />
        </div>

        <div className="cart-items">
          {dataCartItems.length === 0 ? (
            <CartEmpty />
          ) : (
            <div className="cartitems">
              <CartItems cartItems={dataCartItems} />
            </div>
          )}
        </div>

        <div className="subtotal">
          <h3>
            SUBTOTAL : $<span>{dataSubtotal}</span>
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Cart
