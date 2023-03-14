import React, { useState } from "react"
import { motion } from "framer-motion"
import useAuth from "../customHooks/useAuth"
import { Link, NavLink, useLocation } from "react-router-dom"
import ProfileActions from "../components/profileActions/ProfileActions"

const AdminNav = () => {
  const [profileActions, setProfileActions] = useState(false)
  const { currentUser } = useAuth()
  const scrollTop = () => {
    window.scroll(0, 0)
  }
  const location = useLocation()
  const adminMenus = [
    {
      menu: "Add Product",
      path: "/dashboard/add-products",
    },
    {
      menu: "All Product",
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
          <div className="admin__nav-menus">
            {adminMenus?.map((val, idx) => (
              <NavLink
                key={idx}
                to={val?.path}
                className={(navClass) =>
                  navClass.isActive ? "admin__nav-active" : null
                }
              >
                {val?.menu}
              </NavLink>
            ))}
          </div>
        ) : null}

        <ProfileActions
          profileActions={profileActions}
          setProfileActions={setProfileActions}
          currentUser={currentUser}
        />
      </div>
    </nav>
  )
}

export default AdminNav
