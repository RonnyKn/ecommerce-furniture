import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../../firebaseConfig/firebaseConfig"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { setClearCart } from "../../redux/slice/cartSlice"
import { motion } from "framer-motion"
import userIcon from "../../assets/images/user-icon.png"

const ProfileActions = ({ profileActions, setProfileActions, currentUser }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("logout Succesfully")
      })
      .catch((error) => {
        toast.error("failed to Logout", error.message)
      })
    setProfileActions(false)
    dispatch(setClearCart())
    navigate("/")
    window.scroll(0, 0)
  }
  const location = useLocation()

  return (
    <div className="navicons-profile">
      <motion.img
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        src={currentUser ? currentUser.photoURL : userIcon}
        alt={`userIcon.png`}
        onClick={() => setProfileActions(!profileActions)}
      />
      <div
        className={`profile__actions ${
          profileActions ? "profile__actions-show" : "profile__actions-hide"
        }`}
      >
        {currentUser ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
            }}
          >
            <p>
              Logged in as <strong>{currentUser?.displayName}</strong>
            </p>
            {location.pathname.startsWith("/dashboard") ? (
              <Link to="/">
                <span className="btn">Shop</span>
              </Link>
            ) : (
              <Link
                to="/dashboard"
                style={{
                  display: `${
                    currentUser?.email === `${process.env.REACT_APP_AUTH_ADMIN}`
                      ? "flex"
                      : "none"
                  }`,
                }}
              >
                <span className="btn">Dashboard</span>
              </Link>
            )}

            <span onClick={logOut} className="btn">
              Logout
            </span>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <span className="btn" onClick={() => setProfileActions(false)}>
                Login
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileActions
