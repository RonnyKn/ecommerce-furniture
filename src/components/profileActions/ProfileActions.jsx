import React from "react"
import { Link, useLocation } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../../firebaseConfig/firebaseConfig"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { setClearCart } from "../../redux/slice/cartSlice"

const ProfileActions = ({ profileActions, setProfileActions, currentUser }) => {
  const dispatch = useDispatch()
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
  }
  const location = useLocation()
  return (
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
            <Link to="/shop">
              <span className="btn">Shop</span>
            </Link>
          ) : (
            <Link
              to="/dashboard"
              style={{
                display: `${
                  currentUser?.email === "admin@gmail.com" ? "flex" : "none"
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
  )
}

export default ProfileActions
