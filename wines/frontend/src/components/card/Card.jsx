import React from 'react'
import "./Card.css"
import { addBasket } from '../../redux/features/BasketSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Card = ({product}) => {
    let {allbasket}=useSelector(p=>p.basket)
    let dispatch=useDispatch()
    console.log(allbasket)
    let navigate=useNavigate()
  return (
    <div className='cart' onClick={()=>navigate(`details/${product._id}`)}>
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <div className="text">
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <button className='add' onClick={(e)=>{
            e.stopPropagation(),
            dispatch(addBasket(product))
        }}>Add Basket</button>
      </div>
    </div>
  )
}

export default Card
