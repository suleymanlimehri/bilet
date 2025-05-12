import React from 'react'
import "./Card.css"
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../../redux/features/BasketSlice'
import { useNavigate} from 'react-router-dom'
const Card = ({ product }) => {
      const { allbasket } = useSelector(state => state.basket)
      let navigate=useNavigate()
  let dispatch = useDispatch()
    return (
            <section id='productcard-area'>
                <div className='container'>

                    <div className="cards">

                        <div className="card">
                            <div className="image">
                                <img src={product.image} alt="" onClick={()=>navigate(`/detailspage/${product._id}`)}/>
                            </div>
                            <div className="text">
                                <p>{product.price}</p>
                                <h3>{product.name}</h3>
                                <p>{product.title}</p>
                                <button onClick={()=>dispatch(addBasket(product))}>Add basket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


    )
}

export default Card
