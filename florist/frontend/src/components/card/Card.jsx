import React from 'react'
import "./Card.css"
import { addBasket } from '../../redux/features/BasketSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Card = ({product}) => {
    let { allbasket } = useSelector(p=>p.basket)
    let dispatch = useDispatch()
    console.log(allbasket)
     let navigate = useNavigate()
  return (
    <div className='product'>
      <div className="image" onClick={()=>navigate(`details/${product._id}`)}>
        <img style={{width:"200px"}} src={product.image} alt="" />
      </div>
      <div className="text">
        <h3 style={{fontSize:"20px"}}>{product.title}</h3>
        <p style={{fontWeight:"bold"}}>${product.price}</p>
        <button onClick={(e)=>{
          e.stopPropagation(),
          dispatch(addBasket(product))
        }}>Add Basket</button>
      </div>
    </div>
  )
}

export default Card
