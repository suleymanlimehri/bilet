import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from "react-router"
import "./DetailsPage.css"
const DetailsPage = () => {
      let { allproduct } = useSelector(state => state.product)
      let {id}=useParams()
    let findProd=allproduct.find((item)=>item._id===id)
  return (
    <section id='cards-area'>
        <div className='card-image'>
          <div className="image">
            <img src={findProd.image} alt="" />
          </div>
          <div className="text">
            <h3>{findProd.title}</h3>
            <p>Finding perfect t-shirt</p>
            <p style={{fontWeight:"bold"}}>${findProd.price}</p>
            <button>Add Basket</button>
          </div>
        </div>    
    </section>
  )
}

export default DetailsPage
