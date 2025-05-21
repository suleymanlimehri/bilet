import React, { useEffect } from 'react'
import "./Cards.css"
import Card from '../card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../../redux/features/ProductSlice'
const Cards = () => {
  let { allproduct } = useSelector(p => p.product)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  return (
    <section id='card-area'>
       <h3>Featured Products</h3>
      <div className='product'>
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
