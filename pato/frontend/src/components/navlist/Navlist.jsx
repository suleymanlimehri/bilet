import React from 'react'
import "./Navlist.css"
import { Link } from 'react-router-dom';
const Navlist = () => {
  return (
    <ul className='links'>
      <Link to="/">
        <li>HOME</li>
      </Link>
      <Link to="/menu">
        <li>MENU</li>
      </Link>
      <Link to="/reserv">
        <li>RESERVATION</li>
      </Link>
      <Link to="/gallary">
        <li>GALLARY</li>
      </Link>
      <Link to="/about">
        <li>ABOUT</li>
      </Link>
      <Link to="/blog">
        <li>BLOG</li>
      </Link>
      <Link to="/contact">
        <li>CONTACT</li>
      </Link>
    </ul>
  )
}

export default Navlist
