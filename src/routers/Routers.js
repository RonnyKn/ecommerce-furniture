import React from "react"
import { Route, Routes } from "react-router-dom"
import Addproducts from "../admin/Addproducts"
import AllProducts from "../admin/AllProducts"
import Dashboard from "../admin/Dashboard"
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

      <Route path="/*" element={<ProtectedRoutes />}>
        <Route path="checkout" element={<Checkout />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/all-products" element={<AllProducts />} />
        <Route path="dashboard/add-products" element={<Addproducts />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  )
}

export default Routers
