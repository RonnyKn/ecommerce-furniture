import "./Header.css"
import React, { useEffect, useState } from "react"
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
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineClose } from "react-icons/md"
import useAuth from "../../customHooks/useAuth"
import { signOut } from "firebase/auth"
import { auth } from "../../firebaseConfig/firebaseConfig"
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
  const [isNavShow, setIsnavShow] = useState(false)
  const [profileActions, setProfileActions] = useState(false)
  const dispatch = useDispatch()
  const dataCartItems = useSelector(selectCartItems)
  const totalQty = useSelector(selectTotalQty)
  const scrollTop = () => {
    window.scroll(0, 0)
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("logout Succesfully")
      })
      .catch((error) => {
        toast.error("failed to Logout", error.message)
      })
    setProfileActions(false)
  }

  useEffect(() => {
    dispatch(setGetTotal())
  }, [dataCartItems, dispatch])

  const { currentUser } = useAuth()

  console.log(currentUser)

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

        <div className={`header-nav ${isNavShow ? "nav-show" : "nav-hide"}`}>
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
          <div className="navicons-profile">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              src={currentUser ? currentUser.photoURL : userIcon}
              alt={`userIcon.png`}
              onClick={() => setProfileActions(!profileActions)}
            />
            <div
              className={`profile__actions ${
                profileActions
                  ? "profile__actions-show"
                  : "profile__actions-hide"
              }`}
            >
              {currentUser ? (
                <div>
                  <p>
                    Logged in as <h4>{currentUser?.displayName}</h4>
                  </p>
                  <span onClick={logOut} className="btn">
                    Logout
                  </span>
                </div>
              ) : (
                <Link to="/login">
                  <span
                    className="btn"
                    onClick={() => setProfileActions(false)}
                  >
                    Login
                  </span>
                </Link>
              )}
            </div>
          </div>
          <button
            className="header-menu"
            onClick={() => setIsnavShow(!isNavShow)}
          >
            {isNavShow ? (
              <MdOutlineClose size="1.8em" />
            ) : (
              <GiHamburgerMenu size="1.8em" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
