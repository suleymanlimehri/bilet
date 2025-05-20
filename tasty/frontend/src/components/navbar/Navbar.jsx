import React from 'react'
import { Link, useNavigate } from 'react-router';
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
    let navigate=useNavigate()
      let {allbasket}=useSelector(p=>p.basket)
  let Total=allbasket.reduce((num,prod)=>num+prod.count,0)
    return (
        <div className='navbar'>
            <div className="logo">
                <p style={{margin:"0"}}>Tasty</p>
            </div>
            <div className="navlists">
                <ul className='navlist'>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/menu">
                        <li>Menu</li>
                    </Link>
                    <Link to="/special">
                        <li>Specialties</li>
                    </Link>
                    <Link to="/reserv">
                        <li>Reservation</li>
                    </Link>
                    <Link to="/blog">
                        <li>Blog</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
            <div className="wrapper">
                <div className="basket">
                    <FaBasketShopping onClick={()=>navigate("/basket")}/>
                        <sup>{Total}</sup>
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

export default Navbar
