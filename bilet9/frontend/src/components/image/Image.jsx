import React from 'react'
import "./Image.css"
const Image = () => {
    return (
        <section id='image-area'>
            <div className="images">
                <div className="image-cart">
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/shoppers/images/women.jpg.webp" alt="" />
                    </div>
                    <div className="text">
                        <h4>Collections</h4>
                        <p>Women</p>
                    </div>
                </div>
                <div className="image-cart">
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/shoppers/images/children.jpg.webp" alt="" />
                    </div>
                    <div className="text">
                        <h4>Collections</h4>
                        <p>Children</p>
                    </div>
                </div>
                <div className="image-cart">
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/shoppers/images/men.jpg.webp" alt="" />
                    </div>
                    <div className="text">
                        <h4>Collections</h4>
                        <p>Men</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Image
