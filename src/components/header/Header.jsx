import "./Header.css"
import React from "react"
import { Link } from "react-router-dom"
import { SlHandbag } from "react-icons/sl"
import userIcon from "../../assets/images/user-icon.png"

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-logo">
          <h5>Rons Furniture</h5>
        </div>
        <div className="header-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
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
