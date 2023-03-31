import React from "react"
import { useLocation } from "react-router-dom"
import AdminNav from "../../admin/AdminNav"
import Routers from "../../routers/Routers"
import Footer from "../footer/Footer"
import Header from "../header/Header"

const Layout = () => {
  const location = useLocation()

  const footerNav = () => {
    if (location.pathname.startsWith("/dashboard")) {
      return null
    }
    if (location.pathname.startsWith("/login")) {
      return null
    }
    if (location.pathname.startsWith("/signup")) {
      return null
    } else {
      return <Footer />
    }
  }

  return (
    <>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}
      <div>
        <Routers />
      </div>
      {footerNav()}
      {/* {location.pathname.startsWith("/dashboard") ? null : <Footer />} */}
    </>
  )
}

export default Layout
