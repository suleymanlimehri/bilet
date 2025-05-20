import React from 'react'
import "./Flower.css"
const Flower = () => {
    return (
        <section id='flower-area'>
            <div className="text">
                <div className="flower">
                    <p style={{ margin: "0" }}>Custom flower</p>
                    <h2 style={{ margin: "0" }}>Let our flowers make your party more perfect.</h2>
                    <div className="button">
                        <button className="orderbtn">ORDER NOW</button>
                        <button className="contactbtn">CONTACT US</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Flower
