import React from 'react'
import { FaBagShopping } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import "./Wrapper.css"
import { useDispatch, useSelector } from 'react-redux';
const Wrapper = ({ open, setOpen }) => {
      const { allbasket } = useSelector(state => state.basket)
  let dispatch = useDispatch()
let navigate=useNavigate()
    const toggleMenu = () => {
        setOpen(!open)
    }
    let basketcount=allbasket.reduce((num,prod)=>num+prod.count,0)
    return (
        <div className='wrapper'>
            <div className="wrapper-area">
                <div className="basket">
                    <FaBagShopping  onClick={()=>navigate("/basket")}  style={{cursor:'pointer'}}/>
                    <sup style={{ paddingLeft: "5px" }}>{basketcount}</sup>
                </div>
                <div className="admin">
                  <RiAdminFill onClick={()=>navigate("/admin")} style={{cursor:"pointer"}}/>  
                </div>
            </div>
            <div className="burger">
                <GiHamburgerMenu onClick={toggleMenu} />
            </div>
        </div>
    )
}

export default Wrapper
