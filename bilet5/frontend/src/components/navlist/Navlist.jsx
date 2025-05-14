import React from 'react'
import { Link } from "react-router";
import "./Navlist.css"
const Navlist = () => {
  return (
    <ul className='links'>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/discover">
        <li>Discover</li>
      </Link>
      <Link to="/donate">
        <li>Donate</li>
      </Link>
      <Link to="/blog">
        <li>Blog</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
    </ul>
  )
}

export default Navlist
