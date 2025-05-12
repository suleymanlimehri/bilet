import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const DetailsPage = () => {
  let { id } = useParams()
  const { allproduct } = useSelector(state => state.product)
  let findprod = allproduct.find((item) => item._id === id)
  console.log(findprod)
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="image">
        <img src={findprod.image} alt="" />
      </div>
      <div className="text">
        <h3 style={{borderBottom:"2px solid green",paddingBottom:"15px"}}>{findprod.title}</h3>
        <p>{findprod.desc}</p>
      </div>
    </div>
  )
}

export default DetailsPage
