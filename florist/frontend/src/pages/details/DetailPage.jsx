import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router"
import "./DetailsPage.css"
const DetailPage = () => {
  let { allproduct } = useSelector(p => p.product)
  let { allbasket } = useSelector(p => p.basket)
  let dispatch = useDispatch()
  let { id } = useParams()
  let product = allproduct.find((prod) => prod._id == id)
  return (
    <section id='details-area'>
      <div className='product'>
        <div className="image">
          <img style={{ width: "350px" }} src={product.image} alt="" />
        </div>
        <div className="text">
          <h3 style={{ fontSize: "30px" }}>{product.title}</h3>
          <p style={{ width: "340px" }}>{product.desc}</p>
          <button onClick={() => dispatch(addBasket(product))}>Add Basket</button>
        </div>
      </div>
    </section>

  )
}

export default DetailPage
