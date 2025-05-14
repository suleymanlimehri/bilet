import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../card/Card'
import { getProduct, search } from '../../redux/features/ProductSlice'
import "./Cards.css"
const Cards = () => {
    let { allproduct } = useSelector(state => state.product)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    },[dispatch])
    return (
        <div>
            <div className='container' style={{padding:"30px 0"}}>
                <input type="search" onChange={(e)=>dispatch(search(e.target.value))} style={{ width: "400px",height:"40px"}} placeholder='  Enter your search'/>
            </div>
            <div className='crad-area' >

                {
                    allproduct && allproduct.map((item) => (
                        <Card key={item._id} prod={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
