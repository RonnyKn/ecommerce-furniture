import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

// rxslice
const initialState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  totalAmount: 0,
  totalQty: 0,
}

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setAddItems: (state, action) => {
      const newItem = action.payload
      const existItem = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      )
      //temporary
      state.totalQty++
      if (existItem >= 0) {
        state.cartItems[existItem].Quantity += 1
        toast.success(
          `${newItem.productName} Quantity increase to ${state.cartItems[existItem].Quantity}`
        )
      } else {
        const combineData = { ...newItem, Quantity: 1 }
        state.cartItems.push(combineData)
        toast.success(`${newItem.productName} added to cart!`)
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
  },
})

export const { setAddItems } = cartSlice.actions

export const selectCartItems = (state) => state.cart.cartItems

export const selectTotalQty = (state) => state.cart.totalQty

export default cartSlice.reducer
