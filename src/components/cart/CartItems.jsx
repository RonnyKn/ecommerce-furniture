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
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

const CartItems = ({ cartItems }) => {
  const dispatch = useDispatch()
  return (
    <div className="cart-items">
      <Table>
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Image</Th>
            <Th>Product Name</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>

        <Tbody>
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
              <Tr
                key={idx}
                style={{ background: `${idx % 2 === 0 ? "#e2f2b2" : ""}` }}
              >
                <Td>{idx + 1}</Td>
                <Td>
                  <img src={imgUrl} alt={`${item?.productName}.png`} />
                </Td>
                <Td>{productName}</Td>
                <Td className="cart-items-price">
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
                </Td>
                <Td>{Quantity}</Td>
                <Td>
                  <motion.button
                    onClick={onRemoveItem}
                    className="cart-items-delete"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <BsTrashFill size="1.8em" />
                  </motion.button>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </div>
  )
}

export default CartItems
