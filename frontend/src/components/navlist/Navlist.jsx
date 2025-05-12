import React from 'react'
import { Link } from "react-router";
import "./Navlist.css"
const Navlist = ({open}) => {
    return (
        <ul className={`links ${open? "open":""} `}>
            <Link to="/"><li className='link'>HOME</li></Link>
            <Link to="/about"><li className='link'>ABOUT</li></Link>
            <Link to="/offer"><li className='link'>OFFER</li></Link>
            <Link to="/menu"><li className='link'>MENU</li></Link>
            <Link to="/news"><li className='link'>NEWS</li></Link>
            <Link to="/galary"><li className='link'>GALLARY</li></Link>
            <Link to="/contact"><li className='link'>CONTACT</li></Link>
        </ul>
    )
}

export default Navlist
