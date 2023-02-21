import "./Header.css"
import React from "react"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
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

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-logo">
          <h5>Rons Furniture</h5>
        </div>
        <div className="header-nav">
          <ul>
            {navigations.map((val, idx) => (
              <li key={idx}>
                <NavLink
                  to={val?.to}
                  className={(navClass) =>
                    navClass.isActive ? "nav-active" : null
                  }
                >
                  {val?.navbar}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-navicons">
          <div className="header-cart">
            <SlHandbag size="1.8em" />
            <span>{totalQty}</span>
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
