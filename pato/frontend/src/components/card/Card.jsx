import React from 'react'
import "./Card.css"
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../../redux/features/BasketSlice';
import { useNavigate } from 'react-router-dom';
const Card = ({ product }) => {
     let {allbasket}=useSelector(p=>p.basket)
        let dispatch=useDispatch()
         let navigate = useNavigate()
    return (
        <div className='cards' onClick={()=>navigate(`details/${product._id}`)}>
            <div className="image">
                <img className='image-card' src={product.image} alt="" />
            </div>
            <div className="text">
                <h2 style={{fontSize:"25px"}}>{product.title}</h2>
                <p>
                    Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
                </p>
                <p className='price'> ${product.price}</p>
                <p>
                    Learn More
                </p>
                <button onClick={(e)=>{
                    e.stopPropagation(),
                    dispatch(addBasket(product))
                }}>Add Basket</button>
            </div>
        </div>
    )
}

export default Card
