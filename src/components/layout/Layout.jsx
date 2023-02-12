import React from "react"
import Routers from "../../routers/Routers"
import Footer from "../footer/Footer"
import Header from "../header/Header"

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  )
}

export default Layout
