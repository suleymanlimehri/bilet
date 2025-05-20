import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../../redux/features/BasketSlice';
import "./Card.css"
import { useNavigate } from 'react-router-dom';
const Card = ({ product }) => {
    let { allbasket } = useSelector(p => p.basket)
    let dispatch = useDispatch()
    let navigate=useNavigate()
    console.log(allbasket)
    return (
        <div className='Card'>
            <div className="cards" onClick={()=>navigate(`details/${product._id}`)}>
                <div className="card-image">
                    <img src={product.image} alt="" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                </div>
                <div className="text">
                    <h2>{product.title}</h2>
                    <p style={{ color: "grey" }}>Meat Potatoes Rice Tomatoe</p>
                </div>
                <div className="price">
                    <p style={{ fontsize: "25px" }}>${product.price}</p>
                    <button onClick={(e) =>{e.stopPropagation(), dispatch(addBasket(product))}
                    }>Add Basket</button>
                </div>
            </div>
        </div>
    )
}

export default Card
