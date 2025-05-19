import React from 'react'
import "./Details.css"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../../redux/features/BasketSlice'
const DetailsPage = () => {
    let { id } = useParams()
    let { allproduct } = useSelector(p => p.product)
    let dispatch=useDispatch()
    let {allbasket}=useSelector(p=>p.basket)
    let findprod = allproduct.find((item) => item._id == id)
    return (
        <section id='details-area'>
            <div className='container'>
                <div className="details">
                    <div className="image">
                        <img style={{width:"300px",height:"300px"}} src={findprod.image} alt="" />
                    </div>
                    <div className="text">
                        <h2>{findprod.title}</h2>
                        <p>{findprod.desc}</p>
                        <button onClick={()=>dispatch(addBasket(product))} className='add'>Add Basket</button>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default DetailsPage
