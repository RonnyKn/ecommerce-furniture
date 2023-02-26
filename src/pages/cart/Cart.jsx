import React from "react"
import { selectCartItems } from "../../redux/slice/cartSlice"
import "./Cart.css"
import { useSelector } from "react-redux"
import CartCount from "../../components/cart/CartCount"
import CartItems from "../../components/cart/CartItems"
import CartEmpty from "../../components/cart/CartEmpty"

const Cart = () => {
  const dataCartItems = useSelector(selectCartItems)
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
      </div>
    </section>
  )
}

export default Cart
