import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const DetailsPage = () => {
    let {id}=useParams()
     let { allproduct } = useSelector(state => state.product)
    let findProd=allproduct.find((item)=>item._id==id)
  return (
    <div style={{display:"flex",gap:"20px",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <img src={findProd.image} alt="" />
      <div className="text" style={{width:"600px"}}>
        <h2>{findProd.title}</h2>
        <p>{findProd.desc}</p>
      </div>
    </div>
  )
}

export default DetailsPage
