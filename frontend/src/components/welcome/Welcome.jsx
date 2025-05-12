import React from 'react'
import "./Welcome.css"
const Welcome = () => {
    return (
        <section id='welcome-area'>
            <div className='container'>
                <div className="welcome">
                    <div className="text">
                        <p className='our'>Our Story</p>
                        <h3>Welcome</h3>
                        <div className="content">
                            <p className='far'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p className='small'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            <button className='learn'>Learn More About Us</button>
                        </div>

                    </div>
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg.webp" alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Welcome
