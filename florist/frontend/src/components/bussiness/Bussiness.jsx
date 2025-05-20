import React from 'react'
import "./Bussiness.css"
const Bussiness = () => {
    return (
        <section id='business-area'>
            <div className="bussiness">
                <div className="left-image">
                    <img style={{ width: "400px", height: '500px' }} src="https://preview.colorlib.com/theme/florist/img/testimonial/left-bg.png.webp" alt="" />
                </div>
                <div className="text">
                    <div className="text-image">
                        <img src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png.webp" alt="" />
                    </div>
                    <div className="text-content">
                        <p>“I just wanted to say thank you for making such gorgeous arrangements for our
                            birthday celebration. I couldn’t get over how perfect they were for the
                            party. You did a fantastic job, and I appreciate it very much”</p>
                        <h4>Alejandro Houston</h4>
                        <p className='bussinesman'>Businessman</p>
                    </div>
                </div>
                <div className="right-image">
                    <img style={{ width: "500px", height: '500px' }} src="https://preview.colorlib.com/theme/florist/img/testimonial/right-bg.png.webp" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Bussiness
