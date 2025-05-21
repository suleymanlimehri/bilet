import React from 'react'
import "./Restaurant.css"
const Restaurant = () => {
    return (
        <section id='restaurant-area'>
            <div className="restaurant">
                <div className="text">
                    <div className="top">
                        <p className='italy'>
							Italian Restaurant
						</p>
                        <h3>
							Welcome
						</h3>
                    </div>
                    <div className="bottom">
                        <p className='donec'>
							Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
						</p>
                        <p className='our'>
							Our Story
							</p>
                    </div>
                </div>
                <div className="image">
                    <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg.webp" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Restaurant
