import React from "react"
import emptyBag from "../../assets/images/emptybag.png"

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <img src={emptyBag} alt={`${emptyBag}.png`} />
    </div>
  )
}

export default CartEmpty
