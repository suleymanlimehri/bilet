import React from 'react'
import "./Blog.css"
const Blog = () => {
    return (
        <section id='blog-area'>
            <div className="blog-text">
                <p style={{ color: "grey" }}>BLOG</p>
                <h2>Recent Blog</h2>
            </div>
            <div className="blogs">
                <div className="blog">
                    <div className="image">
                        <img style={{width:"400px",height:"300px"}}  src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg" alt="" />
                    </div>
                    <div className="text">
                        <p>July 7, 2018 Admin</p>
                        <h3 style={{width:"350px"}}>Even the all-powerful Pointing has no control about the blind texts</h3>
                        <p>Read more</p>
                    </div>
                </div>
                <div className="blog">
                    <div className="image">
                        <img style={{width:"400px",height:"300px"}} src="https://preview.colorlib.com/theme/tasty/images/image_6.jpg" alt="" />
                    </div>
                    <div className="text">
                        <p>July 7, 2018 Admin</p>
                        <h3  style={{width:"350px"}}>Even the all-powerful Pointing has no control about the blind texts</h3>
                        <p>Read more</p>
                    </div>
                </div>
                <div className="blog">
                    <div className="image">
                        <img style={{width:"400px",height:"300px"}}  src="https://preview.colorlib.com/theme/tasty/images/image_7.jpg" alt="" />
                    </div>
                    <div className="text">
                        <p>July 7, 2018 Admin</p>
                        <h3  style={{width:"350px"}}>Even the all-powerful Pointing has no control about the blind texts</h3>
                        <p>Read more</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
