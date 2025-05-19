import React from 'react'
import Logo from '../components/logo/Logo'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const Layout = () => {
  return (
    <div>
      <Logo/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
