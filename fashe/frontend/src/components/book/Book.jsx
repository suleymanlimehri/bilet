import React from 'react'
import "./Book.css"
const Book = () => {
    return (
        <section id='book-area'>
            <div className='book'>
                <div className="text-image">
                    <div className="image">
                        <img style={{ width: "400px" }} src="https://preview.colorlib.com/theme/fashe/images/banner-08.jpg.webp" alt="" />
                    </div>
                    <div className="content">
                        <p className='beauty'>The Beauty</p>
                        <h3 className='look'>Lookbook</h3>
                        <p className='view'>View Collection</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="image">
                        <img style={{ width: "400px",height:"300px" }} src="https://preview.colorlib.com/theme/fashe/images/shop-item-09.jpg.webp" alt="" />
                    </div>
                    <div className="content">
                        <div className="content-price">
                            <p style={{color:'grey'}}>Gafas sol Hawkers one</p>
                            <div className="dolar">
                                <p style={{ textDecoration: "line-through", color: "grey", display: "inline-block", marginRight: "20px" }}>$29.50</p>
                                <span style={{ color: "red" }}>$15.90</span>
                            </div>
                        </div>
                    </div>
                    <div className="prices">
                        <div className="price">
                            <p>69</p>
                            <p>days</p>
                        </div>
                        <div className="price">
                            <p>10</p>
                            <p>hrs</p>
                        </div>
                        <div className="price">
                            <p>13</p>
                            <p>mins</p>
                        </div>
                        <div className="price">
                            <p>10</p>
                            <p>secs</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Book
