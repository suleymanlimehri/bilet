import React from 'react'
import "./Card.css"
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../../redux/features/BasketSlice'
import { useNavigate } from 'react-router-dom'
const Card = ({ prod }) => {
      let { allbasket } = useSelector(state => state.basket)
  let dispatch = useDispatch()
    let navigate=useNavigate()
    return (
        <section>
                    <div className="product" style={{width:"300px"}} onClick={()=>navigate(`details/${prod._id}`)}>
                        <div className="image">
                            <img src={prod.image} style={{width:"100px"}} alt="" />
                        </div>
                        <div className="text">
                            <h2 style={{color:"orange",fontWeight:"bold"}}>{prod.title}</h2>
                            <p>{prod.name}</p>
                            <button onClick={(e)=>{
                                e.stopPropagation(),
                                dispatch(addBasket(prod))
                            }} style={{padding:"10px",border:"none",color:"white",backgroundColor:"orange",letterSpacing:"1.5px",fontVariant:"small-caps"}}>AddBasket</button>
                        </div>
                    </div>
        </section>

    )
}

export default Card
