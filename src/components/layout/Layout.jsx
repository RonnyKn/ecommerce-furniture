import React, { useEffect } from "react"
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

  // useEffect(() => {
  //   footerNav()
  // }, [])
  return (
    <>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}
      <div>
        <Routers />
      </div>
      {footerNav()}
      {/* {location.pathname.startsWith("/dashboard") ? null : <Footer />} */}
      {/* {location.pathname.startsWith("/login") ? null : <Footer />} */}
      {/* {location.pathname.startsWith("/signup") ? null : <Footer />} */}
    </>
  )
}

export default Layout
