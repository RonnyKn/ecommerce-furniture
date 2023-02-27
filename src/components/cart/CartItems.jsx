import React from "react"
import { useDispatch } from "react-redux"
import {
  setDecreaseQty,
  setIncreaseQty,
  setRemoveItem,
} from "../../redux/slice/cartSlice"
import { AiFillMinusCircle } from "react-icons/ai"
import { BsFillPlusCircleFill, BsTrashFill } from "react-icons/bs"
import { motion } from "framer-motion"

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
                    <motion.button
                      type="button"
                      onClick={onDecreaseQty}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        visibility: `${Quantity === 1 ? "hidden" : ""}`,
                      }}
                    >
                      <AiFillMinusCircle size="2.1em" />
                    </motion.button>
                    $ {price * Quantity}
                    <motion.button
                      type="button"
                      onClick={onIncreaseQty}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <BsFillPlusCircleFill size="1.8em" />
                    </motion.button>
                  </span>
                </td>
                <td>{Quantity}</td>
                <td>
                  <motion.button
                    onClick={onRemoveItem}
                    className="cart-items-delete"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <BsTrashFill size="1.8em" />
                  </motion.button>
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
