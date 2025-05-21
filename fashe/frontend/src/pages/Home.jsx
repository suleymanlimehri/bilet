import React from 'react'
import Hero from '../components/hero/Hero'
import Cards from '../components/cards/Cards'
import Book from '../components/book/Book'
import Blog from '../components/blog/Blog'
import Insta from '../components/insta/Insta'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Cards/>
      <Book/>
      <Blog/>
      <Insta/>
    </div>
  )
}

export default Home
