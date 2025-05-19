import React from 'react'
import "./Footer.css"
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <section id='footer-area'>
      <div className='container'>
        <div className="footer">
          <div className="icons">
            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              <FaTwitter />
            </div>
            <div className="icon">
              <TfiYoutube />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
          </div>
          <div className="text">
            <p> Copyright © 2025 All rights reserved | This template is made with <FaHeart color='red'/> by Colorlib</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer
