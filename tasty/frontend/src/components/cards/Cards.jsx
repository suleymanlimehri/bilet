import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
import "./Cards.css"
import { getProduct, search, sortByHigh, sortByLow } from '../../redux/features/ProductSlice';
const Cards = () => { 
     let {allproduct}=useSelector(p=>p.product)
     let dispatch=useDispatch()
     useEffect(()=>{
        dispatch(getProduct())
     },[dispatch])
     console.log(allproduct)
  return (
    <section id='card-area'>
        <div className="container">
            <div className="menu">
                <p>Our Menu</p>
                <h2>Discover Our Exclusive Menu</h2>
            </div>
            <div className="top">
                <input type="search" placeholder='  Enter your search' onChange={(e)=>dispatch(search(e.target.value))}/>
                <div className="button">
                    <button onClick={()=>dispatch(sortByHigh())}>SortByHigh</button>
                    <button onClick={()=>dispatch(sortByLow())}>SortByLow</button>
                </div>
            </div>
             <div className="cards">
        {
            allproduct.map((prod)=>(
                <Card key={prod._id} product={prod}/>
            ))
        }
      </div>     
        </div>

    </section>
  )
}

export default Cards
