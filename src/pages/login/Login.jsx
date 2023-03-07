import "./Login.css"
import React from "react"
import { motion } from "framer-motion"

const Login = () => {
  return (
    <section className="login">
      <div className="container login-container">
        <h1>Login</h1>
        <form action="submit">
          <div>
            <label>Email</label>
            <input type="email" placeholder="Enter your email.." required />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password.."
              required
            />
          </div>
          <motion.button
            type="submit"
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Login
          </motion.button>
        </form>
      </div>
    </section>
  )
}

export default Login
