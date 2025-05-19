import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navlist.css"
import { useSelector } from 'react-redux';
const Navlist = () => {
  let navigate=useNavigate()
  let {allbasket}=useSelector(p=>p.basket)
  let basketcount=allbasket.reduce((num,prod)=>num+prod.count,0)
  return (
    <div className='navlist'>
      <ul className='links'>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/wines">
          <li>Wines</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <div className="wrapper">
        <div className="basket">
          <FaBasketShopping onClick={()=>navigate("/basket")}/>
            <sup>{basketcount}</sup>
        </div>
        <div className="admin">
          <FaUser  onClick={()=>navigate("/admin")}/>
        </div>
        <div className="burger">
          <GiHamburgerMenu />
        </div>
      </div>
    </div>

  )
}

export default Navlist
