import React from 'react'
import "./DetailsPage.css"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
const DetailPage = () => {
  let { allproduct } = useSelector(p => p.product)
  let { id } = useParams()
  let findprod = allproduct.find((item) => item._id == id)
  return (
    <section id='details-area'>
        <div className="cards">
          <div className="card-image">
            <img src={findprod.image} style={{ width: "350px" }} alt="" />
          </div>
          <div className="text">
            <h2>{findprod.title}</h2>
            <p style={{ color: "grey" }}>Meat Potatoes Rice Tomatoe</p>
            <div className="price">
              <p style={{ fontsize: "25px" }}>${findprod.price}</p>
              <button onClick={() => dispatch(addBasket(findprod))}>Add Basket</button>
            </div>
          </div>
        </div>

    </section>

  )
}

export default DetailPage
