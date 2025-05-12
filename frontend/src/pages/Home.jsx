import React from 'react'
import Welcome from '../components/welcome/Welcome'
import News from '../components/news/News'
import Galary from '../components/galary/Galary'
import Products from './products/Products'

const Home = () => {
  return (
    <div>
      <Welcome />
      <Products/>
      <News />
      <Galary />
    </div>
  )
}

export default Home
