import React from 'react'
import "./Footer.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <section id='footer-area'>
      <div className='container'>
        <div className="footer">
          <div className="nav">
            <h3>Navigations</h3>
            <div className="footer-link">
              <div className="sel">
                <ul className='link'>
                  <li>Sell online</li>
                  <li>Features</li>
                  <li>Shopping cart</li>
                  <li>Store builder</li>
                </ul>
              </div>
              <div className="sel">
                <ul className='link'>
                  <li>Mobile commerce</li>
                  <li>Dropshipping</li>
                  <li>Website development</li>
                </ul>
              </div>
              <div className="sel">
                <ul className='link'>
                  <li>Point of sale</li>
                  <li>Hardware</li>
                  <li>Software</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="promo">
            <h3>Promo</h3>
            <div className="image">
              <img style={{ width: "200px", height: "100px" }} src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp" alt="" />
            </div>
            <div className="text">
              <h3 style={{ color: "#7971ea" }}>Finding Your Perfect Shoes</h3>
              <p>Promo from  nuary 15 — 25, 2019</p>
            </div>
          </div>
          <div className="contact">
            <h3>Contact Info</h3>
            <div className="contacts">
              <div className="address">
                <div className="icons">
                  <FaLocationDot />
                </div>
                <div className="content">
                  <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                </div>
              </div>
              <div className="phone">
                <div className="icons">
                  <FaPhoneAlt />
                </div>
                <div className="content">
                  <p>+2 392 3929 210</p>
                </div>
              </div>
              <div className="email">
                <div className="icons">
                  <MdEmail />
                </div>
                <div className="content">
                  <p>emailaddress@domain.com</p>
                </div>
              </div>
            </div>
            <div className="form">
              <form action="" >
                <label htmlFor="Subscribe" style={{ fontSize: "20px" }}>Subscribe</label>
                <div className="input" style={{position: "relative",width:"250px"}}>
                  <input type="email" style={{ height: "40px", borderRadius: "5px", border: "none", border: "1px solid grey", width: "250px"}} placeholder='  Email' />
                  <button style={{ position: "absolute",  right: "3px",top:"3px",padding:"7px",backgroundColor:" #7971ea",color:"white",border:"none",cursor:"pointer",letterSpacing:"1.3px",borderRadius:"5px",fontSize:"13px"}}>SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p style={{ color: "grey",textAlign:"center" }}>Copyright © 2025 All rights reserved | This template is made with <FaHeart /> by <span style={{ color: "#7971ea" }}>Colorlib</span></p>
      </div>
    </section>

  )
}

export default Footer
