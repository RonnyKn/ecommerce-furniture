import React from "react"
import { useLocation } from "react-router-dom"
import AdminNav from "../../admin/AdminNav"
import Routers from "../../routers/Routers"
import Footer from "../footer/Footer"
import Header from "../header/Header"

const Layout = () => {
  const location = useLocation()

  return (
    <>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}
      <div>
        <Routers />
      </div>
      {location.pathname.startsWith("/dashboard") ? null : <Footer />}
    </>
  )
}

export default Layout
