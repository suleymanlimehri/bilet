import React from 'react'
import "./Reviews.css"
const Reviews = () => {
  return (
    <section id='reviews-area'>
      <div className="text">
        <p className='custom'>Customers Say</p>
        <h3 className='review'>Review</h3>
        <div className="image-card">
            <div className="image">
                <img src="https://preview.colorlib.com/theme/pato/images/avatar-01.jpg.webp" alt="" />
            </div>
        </div>
        <div className="image-content">
            <p className='desc'>“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”</p>
            <p style={{color:"red"}}>★★★★★</p>
            <p>Marie Simmons ˗ New York</p>
        </div>
      </div>
    </section>
  )
}

export default Reviews
