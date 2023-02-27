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
      ) //return an index

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
    setRemoveItem: (state, action) => {
      const newItem = action.payload
      const removeItem = state.cartItems.filter(
        (item) => newItem.id !== item.id
      )
      state.cartItems = removeItem
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
      toast.success(`${newItem.productName} removed from cart!`)
    },
    setIncreaseQty: (state, action) => {
      const newItem = action.payload
      const itemIndex = state.cartItems.findIndex(
        (item) => newItem.id === item.id
      )

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].Quantity += 1
        toast.success(
          `Quantity increase to ${state.cartItems[itemIndex].Quantity}`
        )
        localStorage.setItem("cart", JSON.stringify(state.cartItems))
      }
    },
    setDecreaseQty: (state, action) => {
      const newItem = action.payload
      const itemIndex = state.cartItems.findIndex(
        (item) => newItem.id === item.id
      )

      if (state.cartItems[itemIndex].Quantity > 1) {
        state.cartItems[itemIndex].Quantity -= 1
        toast.success(
          `Quantity decrease to ${state.cartItems[itemIndex].Quantity}`
        )
        localStorage.setItem("cart", JSON.stringify(state.cartItems))
      }
    },
    setGetTotal: (state, action) => {
      let { totalAmount, totalQty } = state.cartItems.reduce(
        (Total, Item) => {
          const { price, Quantity } = Item
          const totalPrice = price * Quantity

          Total.totalAmount += totalPrice
          Total.totalQty += Quantity

          return Total
        },
        { totalAmount: 0, totalQty: 0 }
      )
      state.totalAmount = totalAmount
      state.totalQty = totalQty
    },
  },
})

export const {
  setAddItems,
  setRemoveItem,
  setIncreaseQty,
  setDecreaseQty,
  setGetTotal,
} = cartSlice.actions

export const selectCartItems = (state) => state.cart.cartItems

export const selectTotalQty = (state) => state.cart.totalQty

export const selectTotalAmount = (state) => state.cart.totalAmount

export default cartSlice.reducer
