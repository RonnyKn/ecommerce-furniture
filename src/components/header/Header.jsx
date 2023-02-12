import "./Header.css"
import React from "react"
import { Link } from "react-router-dom"
import { SlHandbag } from "react-icons/sl"
import userIcon from "../../assets/images/user-icon.png"
import { useState } from "react"

const Header = () => {
  const [activeNav, setActiveNav] = useState("/")
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
              <li
                onClick={() => setActiveNav(`${val?.to}`)}
                className={activeNav === val?.to && "nav-active"}
                key={idx}
              >
                <Link to={val?.to}>{val?.navbar}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-navicons">
          <SlHandbag size="1.8em" />
          <img src={userIcon} alt={`userIcon.png`} />
        </div>
      </div>
    </header>
  )
}

export default Header
