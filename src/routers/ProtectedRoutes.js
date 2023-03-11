import React from "react"
import useAuth from "../customHooks/useAuth"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
  const { currentUser } = useAuth()

  return currentUser ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes
