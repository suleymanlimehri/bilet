import React from 'react'
import Hero from '../components/hero/Hero'
import Chef from '../components/chef/Chef'
import Cards from '../components/cards/Cards'
import Guest from '../components/guest/Guest'
import Blog from '../components/blog/Blog'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Chef/>
      <Cards/>
      <Guest/>
      <Blog/>
    </div>
  )
}

export default Home
