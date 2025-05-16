import React from 'react'
import "./Card.css"
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../../redux/features/BasketSlice'
import { useNavigate } from 'react-router-dom'
const Card = ({product}) => {
     let { allbasket } = useSelector(state => state.basket)
    let dispatch = useDispatch()
    let navigate=useNavigate()
    
  return (
    <div>
      <div className="image">
        <img src={product.image} alt="" onClick={()=>navigate(`details/${product._id}`)}/>
      </div>
      <div className="text">
        <h3>{product.title}</h3>
        <p>Finding perfect t-shirt</p>
        <p style={{fontWeight:"bold"}}>${product.price}</p>
        <button onClick={()=>dispatch(addBasket(product))}>Add Basket</button>
      </div>
    </div>
  )
}

export default Card
