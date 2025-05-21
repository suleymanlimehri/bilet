import React from 'react'
import "./Blog.css"
const Blog = () => {
    return (
        <section id='blog-area'>
                <div className="blogs">
                    <div className="blog">
                        <div className="image">
                            <img style={{ width: "400px" }} src="https://preview.colorlib.com/theme/fashe/images/blog-01.jpg.webp" alt="" />
                        </div>
                        <div className="text">
                            <h3 style={{ fontSize: "20px", fontWeight: "500" }}>
                                Black Friday Guide: Best Sales & Discount Codes
                            </h3>
                            <p>By Nancy Ward on July 22, 2017</p>
                            <p style={{ width: "400px",color:"grey",lineHeight:1.8 }}>
                                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames
                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <div className="image">
                            <img  style={{ width: "400px" }} src="https://preview.colorlib.com/theme/fashe/images/blog-02.jpg.webp" alt="" />
                        </div>
                        <div className="text">
                            <h3 style={{ fontSize: "20px", fontWeight: "500" }}>

                                The White Sneakers Nearly Every Fashion Girls Own

                            </h3>
                            <p>By Nancy Ward on July 22, 2017</p>
                            <p style={{ width: "400px",color:"grey" ,lineHeight:1.8 }}>

                                Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit ame

                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <div className="image">
                            <img  style={{ width: "400px" }} src="https://preview.colorlib.com/theme/fashe/images/blog-03.jpg.webp" alt="" />
                        </div>
                        <div className="text">
                            <h3 style={{ fontSize: "20px", fontWeight: "500",  }}>

                                New York SS 2018 Street Style: Annina Mislin
                            </h3>
                            <p>By Nancy Ward on July 22, 2017</p>
                            <p style={{ width: "400px",color:"grey",lineHeight:1.8}}>
                                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames
                            </p>
                        </div>
                </div>

            </div>
        </section>

    )
}

export default Blog
