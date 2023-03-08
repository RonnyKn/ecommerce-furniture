import "./Login.css"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <section className="login">
      <div className="container login-container">
        <h1>Login</h1>
        <form action="submit">
          <div>
            <label>
              <h4>E-mail</h4>
            </label>
            <input
              type="email"
              placeholder="Enter your email.."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>
              <h4>Password</h4>
            </label>
            <input
              type="password"
              placeholder="Enter your password.."
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <p>
            Dont have an Account?
            <span>
              <Link to="/signup"> Register here! </Link>
            </span>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login
