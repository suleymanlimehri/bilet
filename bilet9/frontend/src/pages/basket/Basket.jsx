import React from 'react'
import "./Basket.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, removeBasket } from '../../redux/features/BasketSlice';
const Basket = () => {
  let { allbasket } = useSelector(state => state.basket)
  let dispatch = useDispatch()
  let total=allbasket.reduce((num,prod)=>num+prod.price*prod.count,0)
  return (
    <div className='container'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Count</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {
            allbasket.map((basket) => (
              <tr key={basket._id}>
                <td>
                  <img style={{width:"150px"}}  src={basket.image} alt="" />
                </td>
                <td>{basket.title}</td>
                <td>${basket.price}</td>
                <td>
                  <div className="count-area">
                    <button className='descbtn' onClick={()=>dispatch(decrement(basket._id))}>-</button>
                    <p>{basket.count}</p>
                    <button className='descbtn' onClick={()=>dispatch(increment(basket._id))}>+</button>
                  </div>
                </td>
                <td>
                  <button className='remove' onClick={()=>dispatch(removeBasket(basket._id))}>Remove</button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </Table>
      <p>Total:${total}</p>
    </div>
  )
}

export default Basket
