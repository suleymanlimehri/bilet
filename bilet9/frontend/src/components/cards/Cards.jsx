import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../card/Card'
import "./Cards.css"
import { getProduct, sortByHigh, sortByLow } from '../../redux/features/ProductSlice'
const Cards = () => {
    let { allproduct } = useSelector(state => state.product)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    return (
        <section id='card-area'>
            <div className="container">
                <div className="feature">
                    <div className="line"></div>
                    <h2>Featured Products</h2>
                </div>
                <div className="top">
                    <button onClick={() => dispatch(sortByHigh())}>HighToLow</button>
                    <button onClick={() => dispatch(sortByLow())}>LowToHigh</button>
                </div>
                <div className='product'>
                    {
                        allproduct.map((item) => (
                            <Card key={item._id} product={item} />
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default Cards
