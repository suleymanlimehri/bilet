import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
    let navigate = useNavigate()
    let { allbasket } = useSelector(p => p.basket)
    let dispatch = useDispatch()
    let total = allbasket.reduce((num, prod) => num + prod.count, 0)
    return (
        <div className='navbars'>
            <div className="logo">
                <img src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png.webp" alt="" />
            </div>
            <div className="navlists">
                <ul className='navlist'>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="/sale">
                        <li>Sale</li>
                    </Link>
                    <Link to="/features">
                        <li>Features</li>
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
                <div className="heart">
                    <FaHeart />
                </div>
                <div className="basket">
                    <FaBasketShopping onClick={() => navigate("/basket")} />
                    <sup style={{color:"red"}}>{total}</sup>
                </div>
                <div className="admin">
                    <FaUser onClick={() => navigate("/admin")} />
                </div>
                <div className="burger">
                    <GiHamburgerMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar
