import { createSlice } from "@reduxjs/toolkit"

// rxslice
const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQty: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existItem = state.cartItems.find((item) => item.id === newItem.id)

      state.totalQty++

      if (!existItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        })
      } else {
        existItem.quantity++
        existItem.totalPrice =
          Number(existItem.totalPrice) + Number(newItem.price)
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      )
      console.log(state.totalQty)
      console.log(state.cartItems)
      console.log(newItem)
      console.log(existItem)
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer
