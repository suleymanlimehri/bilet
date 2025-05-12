import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Header.css"
import Text from '../text/Text'
const Header = () => {
  return (
    <div className='header'>
      <Navbar />
      <Text/>
    </div>
  )
}

export default Header
