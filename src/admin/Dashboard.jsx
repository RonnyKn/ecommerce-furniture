import "./Admin.css"
import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
const Dashboard = () => {
  return (
    <section className="dashboard">
      <h3 className="container">
        Welcome <span> Admin</span>
      </h3>
      <div className="container dashboard-container">
        <Link to="/dashboard/add-products">
          <motion.div
            className="dashboard-menu"
            style={{ background: "#e2f2b2" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Add product
          </motion.div>
        </Link>
        <Link to="/dashboard/all-products">
          <motion.div
            className="dashboard-menu"
            style={{ background: "#ceebe9" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            All product
          </motion.div>
        </Link>
        <Link to="/dashboard/users">
          <motion.div
            className="dashboard-menu"
            style={{ background: "#fdefe6" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Users
          </motion.div>
        </Link>
      </div>
    </section>
  )
}

export default Dashboard
