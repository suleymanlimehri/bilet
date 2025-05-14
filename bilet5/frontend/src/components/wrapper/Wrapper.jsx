import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import "./Wrapper.css"
import { useSelector } from 'react-redux';
const Wrapper = () => {
      let { allbasket } = useSelector(state => state.basket)
    let basketcount=allbasket.reduce((num,prod)=>num+prod.count,0)
    let navigate=useNavigate()
    return (
        <div className='wrapper'>
            <div className="basket">
                <FaBasketShopping onClick={()=>navigate("/basket")}/>
                <sup style={{color:"red",fontWeight:"bold"}}>{basketcount}</sup>
            </div>
            <div className="admin" onClick={()=>navigate("/admin")}>
                <RiAdminFill />
            </div>
            <div className="burger">
                <GiHamburgerMenu />
            </div>
        </div>
    )
}

export default Wrapper
