import React from 'react'
import "./DetailPage.css"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const DetailPage = () => {
  let { allbasket } = useSelector(p => p.basket)
  let { allproduct } = useSelector(p => p.product)
  let dispatch = useDispatch()
  let { id } = useParams()
  let product = allproduct.find((item)=>item._id==id)
    return(
      <section id='details-area'>
        <div className='cards'>
          <div className="image">
            <img className='image-card' src={product.image} alt="" />
          </div>
          <div className="text">
            <h2 style={{ fontSize: "25px" }}>{product.title}</h2>
            <p>
              Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
            </p>
            <p className='price'> ${product.price}</p>
            <p>
              Learn More
            </p>
            <button onClick={(e) => {
              e.stopPropagation(),
                dispatch(addBasket(product))
            }}>Add Basket</button>
          </div>
        </div>
      </section>

    )
}

export default DetailPage
