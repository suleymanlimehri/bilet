import React from 'react'
import { Link } from 'react-router-dom'
import "./Navlist.css"
const Navlist = () => {
  return (
    <ul className='links'>
      <Link to="/">
        <li>HOME</li>
      </Link>
      <Link to='/about'>
        <li>ABOUT</li>
      </Link>
      <Link to='/services'>
        <li>SERVICES</li>
      </Link>
      <Link to='/shop'>
        <li>SHOP</li>
      </Link>
      <Link to='/pages'>
        <li>PAGES</li>
      </Link>
      <Link to='/blog'>
        <li>BLOG</li>
      </Link>
      <Link to='/contact'>
        <li>CONTACT</li>
      </Link>
    </ul>
  )
}

export default Navlist
