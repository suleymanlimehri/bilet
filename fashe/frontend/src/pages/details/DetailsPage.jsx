import React from 'react'
import "./DetailsPage.css"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router"
const DetailsPage = () => {
  let { allproduct } = useSelector(p => p.product)
  let { allbasket } = useSelector(p => p.basket)
  let { id } = useParams()
  let dispatch = useDispatch()
  let product = allproduct.find((prod) => prod._id == id)
  return (
    <section id='details-area'>
      <div className="details">
        <div className="image">
          <img style={{ width: "400px", height: "400px" }} src={product.image} alt="" />
        </div>
        <div className="text">
          <h2 style={{ fontSize: "20px", fontWeight: "500" }}>{product.title}</h2>
          <p>{product.price}</p>
          <button onClick={() => dispatch(addBasket(product))}>Add To Cart</button>
        </div>
      </div>

    </section>
  )
}

export default DetailsPage
