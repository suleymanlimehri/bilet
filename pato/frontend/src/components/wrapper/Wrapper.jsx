import React from 'react'
import "./Wrapper.css"
import { FaUserAlt } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Wrapper = () => {
  let navigate = useNavigate()
  let { allbasket } = useSelector(p => p.basket)
  let total=allbasket.reduce((num,prod)=>num+prod.count,0)
  return (
    <div className='wrapper'>
      <div className="heart">
        <FaHeart />
      </div>
      <div className="basket">
        <FaBasketShopping onClick={() => navigate("/basket")} />
        <sup style={{color:"red"}}>{total}</sup>
      </div>
      <div className="admin">
        <FaUserAlt onClick={() => navigate("/admin")} />
      </div>
      <div className="burger">
        <GiHamburgerMenu />
      </div>
    </div>
  )
}

export default Wrapper
