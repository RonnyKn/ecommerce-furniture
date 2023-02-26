import React from "react"

const CartItems = ({ cartItems }) => {
  return (
    <div className="cart-items">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item, idx) => (
            <tr
              key={idx}
              style={{ background: `${idx % 2 === 0 ? "#e2f2b2" : ""}` }}
            >
              <td>{idx + 1}</td>
              <td>
                <img src={item?.imgUrl} alt={`${item?.productName}.png`} />
              </td>
              <td>{item?.productName}</td>
              <td>$ {item?.price}</td>
              <td>{item?.Quantity}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CartItems
