import React from "react"
import { useDispatch } from "react-redux"
import { setRemoveItem } from "../../redux/slice/cartSlice"

const CartItems = ({ cartItems }) => {
  const dispatch = useDispatch()

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
          {cartItems.map((item, idx) => {
            const { productName, imgUrl, price, Quantity } = item
            const onRemoveItem = () => {
              dispatch(setRemoveItem({ ...item }))
            }
            return (
              <tr
                key={idx}
                style={{ background: `${idx % 2 === 0 ? "#e2f2b2" : ""}` }}
              >
                <td>{idx + 1}</td>
                <td>
                  <img src={imgUrl} alt={`${item?.productName}.png`} />
                </td>
                <td>{productName}</td>
                <td>$ {price * Quantity}</td>
                <td>{Quantity}</td>
                <td>
                  <button onClick={onRemoveItem}>delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CartItems
