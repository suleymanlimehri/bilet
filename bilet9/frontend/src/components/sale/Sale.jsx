import React from 'react'
import "./Sale.css"
const Sale = () => {
    return (
        <section id='sale-area'>
            <div className='container'>
                <div className="feature">
                    <div className="line"></div>
                    <h2>Big Sale!</h2>
                </div>
                <div className="sales">
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg.webp" alt="" />
                    </div>
                    <div className="text">
                        <p className='price'>50% less in all items</p>
                        <p className='by'>By <span style={{ color: " #7971ea" }}>Carl Smith</span>  September 3, 2018</p>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                        </div>
                        <div className="button">
                            <button className='shop'>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sale
