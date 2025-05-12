import React, { useState } from 'react'
import Logo from "../logo/Logo"
import Navlist from "../navlist/Navlist"
import Wrapper from "../wrapper/Wrapper"
import "./Navbar.css"
const Navbar = () => {
    const [open,setOpen]=useState(false)
    return (
        <section id='navbar-area'>
            <div className="container">
                <div className='navbar'>
                    <Logo />
                    <Navlist open={open}/>
                    <Wrapper open={open} setOpen={setOpen}/>
                </div>
            </div>

        </section>

    )
}

export default Navbar
