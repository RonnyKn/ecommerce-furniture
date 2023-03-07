import "./Login.css"
import React from "react"

const Login = () => {
  return (
    <section className="login">
      <div className="container login-container">
        <h1>Login</h1>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
      </div>
    </section>
  )
}

export default Login
