import React from 'react'
import Main from '../components/main/Main'
import Shipping from '../components/shipping/Shipping'
import Image from '../components/image/Image'
import Cards from '../components/cards/Cards'
import Sale from '../components/sale/Sale'

const Home = () => {
  return (
    <div>
      <Main/>
      <Shipping/>
      <Image/>
      <Cards/>
      <Sale/>
    </div>
  )
}

export default Home
