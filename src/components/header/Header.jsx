import "./Header.css"
import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { Link, NavLink } from "react-router-dom"
import { SlHandbag } from "react-icons/sl"
import userIcon from "../../assets/images/user-icon.png"
import { useDispatch, useSelector } from "react-redux"
import {
  selectTotalQty,
  setGetTotal,
  selectCartItems,
} from "../../redux/slice/cartSlice"
import { toast } from "react-toastify"

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
  const dispatch = useDispatch()
  const dataCartItems = useSelector(selectCartItems)
  const totalQty = useSelector(selectTotalQty)
  const scrollTop = () => {
    window.scroll(0, 0)
  }

  useEffect(() => {
    dispatch(setGetTotal())
  }, [dataCartItems, dispatch])

  return (
    <header className="header">
      <div className="container header-container">
        <motion.div
          className="header-logo"
          onClick={scrollTop}
          whileHover={{ scale: 1.2 }}
        >
          <Link to="/">
            <span className="title1">Ron</span>
            <strong className="title2">SHOP</strong>
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
          <motion.div
            className="header-cart"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollTop}
          >
            <Link to="/cart">
              <SlHandbag size="1.8em" />
              {totalQty === 0 ? "" : <span>{totalQty}</span>}
            </Link>
          </motion.div>
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            src={userIcon}
            alt={`userIcon.png`}
            onClick={() => toast.error("Available soon")}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
