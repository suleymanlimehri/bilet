import React from 'react'
import "./Navbar.css"
import Logo from "../logo/Logo"
import Wrapper from '../wrapper/Wrapper'
import Navlist from '../navlist/Navlist'
const Navbar = () => {
  return (
    <div className='container navbar'>
      <Logo/>
      <Navlist/>
      <Wrapper/>
    </div>
  )
}

export default Navbar
