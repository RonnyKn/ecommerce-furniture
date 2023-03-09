import React from "react"
import { Route, Routes } from "react-router-dom"
import Cart from "../pages/cart/Cart"
import Checkout from "../pages/checkout/Checkout"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import ProductDetails from "../pages/productdetails/ProductDetails"
import Shop from "../pages/shop/Shop"
import Signup from "../pages/signup/Signup"
import ProtectedRoutes from "./ProtectedRoutes"

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route
        path="checkout"
        element={
          <ProtectedRoutes>
            <Checkout />
          </ProtectedRoutes>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  )
}

export default Routers
