import React from 'react'
import "./Card.css"
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../../../redux/features/BasketSlice'
import { useNavigate } from 'react-router-dom'
const Card = ({product}) => {
    let {allbasket}=useSelector(p=>p.basket)
    let dispatch=useDispatch()
     let navigate = useNavigate()
    console.log(allbasket)
  return (
    <div onClick={()=>navigate(`details/${product._id}`)}>
      <div className="image">
        <img style={{width:"200px",height:"200px"}} src={product.image} alt="" />
      </div>
      <div className="text">
        <h2 style={{fontSize:"20px",fontWeight:"500"}}>{product.title}</h2>
        <p>{product.price}</p>
        <button onClick={(e)=>{
          e.stopPropagation(),
           dispatch(addBasket(product))
        }}>Add To Cart</button>
      </div>
    </div>
  )
}

export default Card
