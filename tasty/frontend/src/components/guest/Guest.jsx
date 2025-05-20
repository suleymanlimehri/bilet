import React from 'react'
import "./Guest.css"
const Guest = () => {
    return (
        <section id='guest-area'>
            <div className="guest">
                <p style={{color:"grey",fontSize:"20px",textTransform:"uppercase"}}>Guests Says</p>
                <h2>Our Satisfied Guests says</h2>
            </div>
            <div className="guests-cart">
                <div className="guests">
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg" style={{ width: "80px", height: "80px", borderRadius: "50%" }} alt="" />
                    </div>
                    <div className="text">
                        ⭐⭐⭐⭐⭐
                        <p className='title'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Dennis Green</p>
                        <p>Guests from Italy</p>
                    </div>
                </div>
                <div className="guests">
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg" style={{ width: "80px", height: "80px", borderRadius: "50%" }} alt="" />
                    </div>
                    <div className="text">
                        ⭐⭐⭐⭐⭐
                        <p className='title'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Dennis Green</p>
                        <p>Guests from Italy</p>
                    </div>
                </div>
                <div className="guests">
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/tasty/images/person_2.jpg" style={{ width: "80px", height: "80px", borderRadius: "50%" }} alt="" />
                    </div>
                    <div className="text">
                        ⭐⭐⭐⭐⭐
                        <p className='title'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>Dennis Green</p>
                        <p>Guests from Italy</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Guest
