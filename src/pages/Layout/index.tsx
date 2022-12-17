import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

export const Layout = () => {
  const token = localStorage.getItem('token')
  const [isLoggedIn, setIsLoggedIn] = useState(token != null)
  
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Outlet />
      <Footer />
    </>
  )
}