import React, { useState } from "react"
import { motion } from "framer-motion"
import useAuth from "../customHooks/useAuth"
import { Link, NavLink, useLocation } from "react-router-dom"
import ProfileActions from "../components/profileActions/ProfileActions"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineClose } from "react-icons/md"

const AdminNav = () => {
  const [profileActions, setProfileActions] = useState(false)
  const [isNavShow, setIsnavShow] = useState(false)
  const { currentUser } = useAuth()
  const scrollTop = () => {
    window.scroll(0, 0)
  }
  const location = useLocation()
  const adminMenus = [
    {
      menu: "Add Products",
      path: "/dashboard/add-products",
    },
    {
      menu: "All Products",
      path: "/dashboard/all-products",
    },
    {
      menu: "Users",
      path: "/dashboard/users-products",
    },
  ]

  return (
    <nav className="admin__nav">
      <div className="container admin__nav-container">
        <motion.div
          className="admin__nav-logo"
          onClick={scrollTop}
          whileHover={{ scale: 1.2 }}
        >
          <Link to="/dashboard">
            <span className="title1">Ron</span>
            <strong className="title2">SHOP</strong>
          </Link>
        </motion.div>

        {location.pathname.includes("products") ? (
          <div
            className={`admin__nav-menus ${
              isNavShow ? "nav-show" : "nav-hide"
            }`}
          >
            <ul>
              {adminMenus?.map((val, idx) => (
                <li key={idx}>
                  <NavLink
                    to={val?.path}
                    className={(navClass) =>
                      navClass.isActive ? "admin__nav-active" : null
                    }
                  >
                    {val?.menu}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="admin__nav-icons">
          <ProfileActions
            profileActions={profileActions}
            setProfileActions={setProfileActions}
            currentUser={currentUser}
          />
          {location.pathname.includes("products") ? (
            <button onClick={() => setIsnavShow(!isNavShow)}>
              {isNavShow ? (
                <MdOutlineClose size="1.8em" />
              ) : (
                <GiHamburgerMenu size="1.8em" />
              )}
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

export default AdminNav
