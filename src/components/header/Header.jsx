import "./Header.css"
import React from "react"
import { motion } from "framer-motion"
import { Link, NavLink } from "react-router-dom"
import { SlHandbag } from "react-icons/sl"
import userIcon from "../../assets/images/user-icon.png"
import { useSelector } from "react-redux"
import { selectTotalQty } from "../../redux/slice/cartSlice"

const Header = () => {
  const navigations = [
    {
      navbar: "Home",
      to: "/",
    },
    {
      navbar: "Shop",
      to: "/shop",
    },
  ]
  const totalQty = useSelector(selectTotalQty)

  const scrollTop = () => {
    window.scroll(0, 0)
  }

  return (
    <header className="header">
      <div className="container header-container">
        <motion.div
          className="header-logo"
          onClick={scrollTop}
          whileHover={{ scale: 1.2 }}
        >
          <Link to="/">
            <span className="title1"> Rons </span>
            <strong className="title2"> SHOP</strong>
          </Link>
        </motion.div>
        <div className="header-nav">
          <ul>
            {navigations.map((val, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.2 }}
                onClick={scrollTop}
              >
                <NavLink
                  to={val?.to}
                  className={(navClass) =>
                    navClass.isActive ? "nav-active" : null
                  }
                >
                  <strong>{val?.navbar}</strong>
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="header-navicons">
          <div className="header-cart">
            <Link to="/cart">
              <SlHandbag size="1.8em" />
              <span>{totalQty}</span>
            </Link>
          </div>
          <motion.img
            whileTap={{ scale: 1.2 }}
            src={userIcon}
            alt={`userIcon.png`}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
