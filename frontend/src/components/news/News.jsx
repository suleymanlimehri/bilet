import React from 'react'
import "./News.css"
const News = () => {
    return (
        <section id='card-area'>
            <div className='container'>
                <div className="news">
                    <div className="top">
                        <h2 style={{ fontSize: "30px", letterSpacing: "1px" }}>News</h2>
                        <p style={{  width: "410px",color:"#B8B8B8"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <img src="https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg.webp" alt="" />
                            <h4>We Have Dilecious Food</h4>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <button>Read More</button>
                        </div>
                        <div className="card">
                            <img src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg.webp" alt="" />
                            <h4>Chef Special Menu</h4>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <button>Read More</button>
                        </div>
                        <div className="card">
                            <img src="https://preview.colorlib.com/theme/eatwell/images/offer_3.jpg.webp" alt="" />
                            <h4>Merriage Celebrations</h4>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default News
