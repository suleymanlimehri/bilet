import React from 'react'
import {Link} from "react-router-dom"
import "./Navlist.css"
const Navlist = () => {
  return (
    <ul className='links'>
      <Link to="/">
        <li>HOME</li>
      </Link>
      <Link to="/about">
        <li>ABOUT</li>
      </Link>
      <Link to="/shop">
        <li>SHOP</li>
      </Link>
      <Link to="/catalog">
        <li>CATALOGUE</li>
      </Link>
      <Link to="/arrivals"> 
        <li>NEW ARRIVALS</li>
      </Link>
      <Link to="/contact">
        <li>CONTACT</li>
      </Link>
    </ul>
  )
}

export default Navlist
