import React, { useEffect } from 'react'
import "./Cards.css"
import { useSelector, useDispatch } from 'react-redux'
import { getProduct, search, sortByHigh, sortByLow } from '../../redux/features/ProductSlice'
import Card from '../card/Card'
const Cards = () => {
    let { allproduct } = useSelector(p => p.product)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    return (
        <section id='card-area'>
            <div className="top">
                <p style={{margin:"0",color:"#f45d96",textTransform:"uppercase"}}>Our flower</p>
                <h2>New Arrivals</h2>
            </div>
            <div className="searchsort">
                <input type="search" placeholder='  Enter your search' onChange={(e)=>dispatch(search(e.target.value))}/>
                <div className="button">
                    <button onClick={()=>dispatch(sortByHigh())}>HighToLow</button>
                    <button onClick={()=>dispatch(sortByLow())}>LowToHigh</button>
                </div>
            </div>
            <div className='products'>
                {
                    allproduct.map((prod) => (
                        <Card key={prod._id} product={prod} />
                    ))
                }
            </div>
        </section>

    )
}

export default Cards
