import React from 'react'
import { FaTruck } from "react-icons/fa";
import "./Shipping.css"
import { IoMdRefresh } from "react-icons/io";
import { MdOutlineHelp } from "react-icons/md";
const Shipping = () => {
    return (
        <section id='shipping-area'>
            <div className='shipping'>
                <div className="shipping-cart">
                    <div className="icons">
                        <FaTruck />
                    </div>
                    <div className="text">
                        <h2>Free Shipping</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
                <div className="shipping-cart">
                    <div className="icons">
                        <IoMdRefresh />
                    </div>
                    <div className="text">
                        <h2>Free Returns</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
                <div className="shipping-cart">
                    <div className="icons">
                        <MdOutlineHelp />
                    </div>
                    <div className="text">
                        <h2>Customer Support</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shipping
