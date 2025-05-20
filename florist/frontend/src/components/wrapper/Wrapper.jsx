import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Wrapper.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Wrapper = () => {
    let navigate = useNavigate()
    let { allbasket } = useSelector(p => p.basket)
  let total=allbasket.reduce((num,prod)=>num+prod.count,0)
    return (
        <div className='wrapper'>
            <div className="basket">
                <FaBasketShopping onClick={() => navigate("/basket")} />
                <sup>{total}</sup>
            </div>
            <div className="user">
                <FaUser onClick={() => navigate("/admin")} />
            </div>
            <div className="burger">
                <GiHamburgerMenu />
            </div>
        </div>
    )
}

export default Wrapper
