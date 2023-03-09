import "./Login.css"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebaseConfig/firebaseConfig"
import { toast } from "react-toastify"
import { async } from "@firebase/util"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user
      console.log(user)
      setLoading(false)
      toast.success("successfully logged in")
      navigate("/checkout")
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  return (
    <section className="login">
      <div className="container login-container">
        <h1>Login</h1>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <form action="submit" onSubmit={signIn}>
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
        )}
      </div>
    </section>
  )
}

export default Login
