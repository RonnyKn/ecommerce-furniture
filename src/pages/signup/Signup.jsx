import "./Signup.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [file, setFile] = useState(null)

  return (
    <section className="login">
      <div className="container login-container">
        <h1>Login</h1>
        <form action="submit">
          <div>
            <label>
              <h4>User Name</h4>
            </label>
            <input
              type="text"
              placeholder="Enter your User Name.."
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
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
          <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <motion.button
            type="submit"
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Sign Up
          </motion.button>
          <p>
            Already have an Account?
            <span>
              <Link to="/login"> Login here! </Link>
            </span>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Signup
