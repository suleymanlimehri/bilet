import React from 'react'
import "./Blog.css"
const Blog = () => {
    return (
        <section id='blog-area'>
            <div className='container'>
                <div className="top">
                    <h2>Wine's Blog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
                    <span>View All Products </span>
                </div>
                <div className="blogs-cart">
                    <div className="blog">
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/wines/images/img_1.jpg.webp" alt="" />
                        </div>
                        <div className="text">
                           <div className="title">
                                <h2>What You Need To Know About Premium Rosecco</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                            <span>Dave Rogers  in News</span>
                        </div>
                    </div>
                    <div className="blog">
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/wines/images/img_2.jpg.webp" alt="" />
                        </div>
                        <div className="text">
                            <div className="title">
                                <h2>What You Need To Know About Premium Rosecco</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                            <span>Dave Rogers  in News</span>
                        </div>
                    </div>
                    <div className="blog">
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/wines/images/img_3.jpg.webp" alt="" />
                        </div>
                        <div className="text">
                          <div className="title">
                                <h2>What You Need To Know About Premium Rosecco</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                            <span>Dave Rogers  in News</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Blog
