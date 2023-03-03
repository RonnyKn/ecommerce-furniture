import React from "react"

const CheckOutItems = ({ cartItems }) => {
  return (
    <div className="checkOutItems-container">
      {cartItems.map((item, idx) => {
        const { productName, imgUrl, price, Quantity } = item
        return (
          <div
            className="checkOutItems"
            key={idx}
            style={{ background: `${idx % 2 === 0 ? "#e2f2b2" : ""}` }}
          >
            <div className="checkOutItems-left">
              <h5>{idx + 1}.</h5>
              <img src={imgUrl} alt={`${productName}.png`} />
            </div>
            <div className="checkOutItems-right">
              <h5>{productName}</h5>
              <h5>$ {price * Quantity}</h5>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CheckOutItems
