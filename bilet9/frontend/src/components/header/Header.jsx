import React from 'react'
import { FaUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css"
import Navlist from '../navlist/Navlist';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { search } from '../../redux/features/ProductSlice';
const Header = () => {
    let navigate=useNavigate()
    let dispatch = useDispatch()
     let { allbasket } = useSelector(state => state.basket)
      let total=allbasket.reduce((num,prod)=>num+prod.count,0)
    return (
        <>
         <div className='header'>
            <div className="search">
                <input type="search" placeholder='Enter your search' style={{padding:"10px"}} onChange={(e)=>dispatch(search(e.target.value))}/>
            </div>
            <div className="logo" >
                Shoppers
            </div>
            <div className="wrapper">
                <div className="user">
                    <FaUser onClick={()=>navigate("/admin")}/>
                </div>
                <div className="heart">
                    <CiHeart />
                </div>
                <div className="basket">
                    <MdOutlineShoppingCart onClick={()=>navigate("/basket")}/>
                    <sup style={{color:"red"}}>{total}</sup>
                </div>
                <div className="burger">
                    <GiHamburgerMenu />
                </div>
            </div>
        </div>
        <Navlist/>
        </>
    )
}

export default Header
