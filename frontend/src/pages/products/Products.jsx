import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from '../../components/card/Card';
import "./Products.css"
import { getProduct, search, sortByHigh, sortBylow } from '../../redux/features/ProductSlice';
const Products = () => {
    const { allproduct } = useSelector(state => state.product)
    let dispatch = useDispatch()
    console.log(allproduct)
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    return (
        <>
            <button onClick={() => dispatch(sortByHigh())}>HighToLow</button>
            <input type="text" placeholder=' Enter your search' onChange={(e) => dispatch(search(e.target.value))} />
            <button onClick={() => dispatch(sortBylow())}>LowToHigh</button>
            <div>
                {
                    allproduct && allproduct.map((prod) => (
                        <Card key={prod._id} product={prod} />
                    ))
                }
            </div>
        </>


    )
}

export default Products
