import React from 'react'
import Hero from '../components/hero/Hero'
import Cards from '../components/cards/Cards'
import Welcome from '../components/welcome/Welcome'
import Image from '../components/image/Image'
import Blog from '../components/blog/Blog'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Cards/>
      <Welcome/>
      <Image/>
      <Blog/>
    </div>
  )
}

export default Home
