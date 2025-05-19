import React, { useEffect } from 'react'
import "./Cards.css"
import { useSelector, useDispatch } from 'react-redux'
import Card from '../card/Card'
import { getProduct, search, sortByHigh, sortByLow } from '../../redux/features/ProductSlice'
import { Link } from 'react-router-dom'
const Cards = () => {
    let { allproduct } = useSelector(state => state.product)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    return (
        <section id='card-area'>
            <div className="container">
                <div className="content">
                    <h2>Our Products</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
                    <Link to="/">View All Products</Link>
                </div>
                <div className="top">
                    <input type="search" placeholder='  Enter your search' onChange={(e) => dispatch(search(e.target.value))} />
                    <div className="sort">
                        <button onClick={() => dispatch(sortByHigh())}>HighToLow</button>
                        <button onClick={() => dispatch(sortByLow())}>LowToHigh</button>
                    </div>
                </div>
                <div className='product'>
                    {
                        allproduct.map((prod) => (
                            <Card key={prod._id} product={prod} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Cards
