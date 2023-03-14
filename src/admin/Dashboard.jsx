import React from "react"
import { Link } from "react-router-dom"
import "./Admin.css"

const Dashboard = () => {
  return (
    <section className="dashboard">
      <h3 className="container">
        Welcome ,<span>Admin</span>
      </h3>
      <div className="container dashboard-container">
        <div className="dashboard-menu">
          <Link to="/dashboard/add-products">Add product</Link>
        </div>
        <div className="dashboard-menu">
          <Link to="/dashboard/all-products">All product</Link>
        </div>
        <div className="dashboard-menu">
          <Link to="/dashboard/users">Users</Link>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
