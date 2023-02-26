import React from "react"
import { useDispatch } from "react-redux"
import {
  setDecreaseQty,
  setIncreaseQty,
  setRemoveItem,
} from "../../redux/slice/cartSlice"
import { AiTwotoneDelete, AiFillMinusCircle } from "react-icons/ai"
import { BsFillPlusCircleFill } from "react-icons/bs"

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
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item, idx) => {
            const { productName, imgUrl, price, Quantity } = item
            const onRemoveItem = () => {
              dispatch(setRemoveItem({ ...item }))
            }
            const onIncreaseQty = () => {
              dispatch(setIncreaseQty({ ...item }))
            }
            const onDecreaseQty = () => {
              dispatch(setDecreaseQty({ ...item }))
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
                <td className="cart-items-price">
                  <span>
                    <button
                      type="button"
                      onClick={onDecreaseQty}
                      style={{
                        visibility: `${Quantity === 1 ? "hidden" : ""}`,
                      }}
                    >
                      <AiFillMinusCircle size="2.1em" />
                    </button>
                    $ {price * Quantity}
                    <button type="button" onClick={onIncreaseQty}>
                      <BsFillPlusCircleFill size="1.8em" />
                    </button>
                  </span>
                </td>
                <td>{Quantity}</td>
                <td>
                  <button onClick={onRemoveItem} className="cart-items-delete">
                    <AiTwotoneDelete size="1.8em" />
                  </button>
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
