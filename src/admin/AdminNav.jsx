import React, { useState } from "react"
import userIcon from "../assets/images/user-icon.png"
import { motion } from "framer-motion"
import useAuth from "../customHooks/useAuth"
import { Link } from "react-router-dom"

const AdminNav = () => {
  const [profileActions, setProfileActions] = useState(false)
  const { currentUser } = useAuth()
  const scrollTop = () => {
    window.scroll(0, 0)
  }

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
        <input type="search" placeholder="input product name" />
        <div className="admin__nav-profile">
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            src={currentUser ? currentUser.photoURL : userIcon}
            alt={`userIcon.png`}
            onClick={() => setProfileActions(!profileActions)}
          />
        </div>
      </div>
    </nav>
  )
}

export default AdminNav