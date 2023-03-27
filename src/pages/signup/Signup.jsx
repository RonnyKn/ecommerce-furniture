import "./Signup.css"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"

import { setDoc, doc } from "firebase/firestore"

import { auth } from "../../firebaseConfig/firebaseConfig"
import { storage } from "../../firebaseConfig/firebaseConfig"
import { db } from "../../firebaseConfig/firebaseConfig"

import { toast } from "react-toastify"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user
      const storageRef = ref(storage, `images/${Date.now() + userName}`)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        (error) => {
          toast.error(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //update user profile
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            })
            //store user data in firestore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            })
          })
        }
      )
      setLoading(false)
      toast.success("account created successfully")
      navigate("/login")
    } catch (error) {
      setLoading(false)
      toast.error("something went wrong ")
    }
  }

  return (
    <section className="login">
      <div className="container login-container">
        <h1>REGISTER</h1>
        {loading ? (
          <h1>Loading..</h1>
        ) : (
          <form action="submit" onSubmit={signup}>
            <div>
              <label>
                <h4>User Name</h4>
              </label>
              <input
                type="text"
                placeholder="Enter your User Name.."
                required
                value={userName}
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ outline: "none", marginTop: ".5rem" }}
              />
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
        )}
      </div>
    </section>
  )
}

export default Signup
