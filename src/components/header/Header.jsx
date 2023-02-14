import "./Header.css"
import React from "react"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { SlHandbag } from "react-icons/sl"
import userIcon from "../../assets/images/user-icon.png"

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
    {
      navbar: "Cart",
      to: "/cart",
    },
  ]

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
          <SlHandbag size="1.8em" />
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
