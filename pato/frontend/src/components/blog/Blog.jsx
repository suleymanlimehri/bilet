import React from 'react'
import "./Blog.css"
const Blog = () => {
    return (
        <section id='blog-area'>
            <div className="top">
                <p>
                    Latest News
                </p>
                <h3>
                    The Blog
                </h3>
            </div>
            <div className="image-card">
                <div className="cards">
                    <div className="image">
                        <img style={{ width: "400px" }} src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg.webp" alt="" />
                    </div>
                    <div className="text">
                        <h4>
                            Best Places for Wine
                        </h4>
                        <p style={{color:"grey"}}>
                            Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
                        </p>
                        <p style={{textTransform:"uppercase",letterSpacing:"1.5px"}}>
                            Continue Reading
                        </p>
                    </div>
                </div>
                <div className="cards">
                    <div className="image">
                        <img style={{ width: "400px" }} src="https://preview.colorlib.com/theme/pato/images/blog-02.jpg.webp" alt="" />
                    </div>
                    <div className="text">
                        <h4>

                            Eggs and Cheese

                        </h4>
                        <p style={{color:"grey"}}>
                            Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
                        </p>
                        <p style={{textTransform:"uppercase",letterSpacing:"1.5px"}}>
                            Continue Reading
                        </p>
                    </div>
                </div>
                <div className="cards">
                    <div className="image">
                        <img style={{ width: "400px" }} src="https://preview.colorlib.com/theme/pato/images/blog-03.jpg.webp" alt="" />
                    </div>
                    <div className="text">
                        <h4>

                            Style the Wedding Party

                        </h4>
                        <p style={{color:"grey"}}>
                            Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
                        </p>
                        <p style={{textTransform:"uppercase",letterSpacing:"1.5px"}}>
                            Continue Reading
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
