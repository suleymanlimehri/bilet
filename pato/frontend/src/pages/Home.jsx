import React from 'react'
import Hero from '../components/Hero/Hero'
import Restaurant from '../components/restaurant/Restaurant'
import Cards from '../components/cards/Cards'
import Reviews from '../components/reviews/Reviews'
import Blog from '../components/blog/Blog'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Restaurant/>
      <Cards/>
      <Reviews/>
      <Blog/>
    </div>
  )
}

export default Home
