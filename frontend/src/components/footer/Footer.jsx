import React from 'react'
import "./Footer.css"
import { FaTwitter } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <section id='footer-area'>
      <div className='container'>
        <div className="footer">
          <div className="about">
            <h5>ABOUT US</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, similique, delectus blanditiis odit expedita amet. Sed labore ipsum vel dolore, quis, culpa et magni autem sequi facere eos tenetur, ex?</p>
          </div>
          <div className="restaurant">
            <h5>THE RESTAURANT</h5>
            <ul>
              <li>About Us</li>
              <li>Chefs</li>
              <li>Events</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="useful">
            <h5>USEFUL LINKS</h5>
            <ul>
              <li>Foods</li>
              <li>Drinks</li>
              <li>Breakfast</li>
              <li>Brunch</li>
              <li>Dinner</li>
            </ul>
          </div>
          <div className="useful">
            <h5>USEFUL LINKS</h5>
            <ul>
              <li>Foods</li>
              <li>Drinks</li>
              <li>Breakfast</li>
              <li>Brunch</li>
              <li>Dinner</li>
            </ul>
          </div>
        </div>
        <div className="icons">
          <FaTwitter />
          <RiFacebookBoxFill />
          <FaInstagram />
        </div>
      </div>
    </section>

  )
}

export default Footer
