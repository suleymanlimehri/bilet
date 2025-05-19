import React from 'react'
import "./Basket.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, removeBasket } from '../../redux/features/BasketSlice';
const Basket = () => {
  let { allbasket } = useSelector(p => p.basket)
  let dispatch = useDispatch()
  let total=allbasket.reduce((num,prod)=>num+prod.count*prod.price,0)
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
                  <img style={{width:"200px"}} src={basket.image} alt="" />
                </td>
                <td>
                  {basket.title}
                </td>
                <td>
                  ${basket.price}
                </td>
                <td>
                  <div className="count">
                    <Button variant="outline-primary" onClick={()=>dispatch(decrement(basket._id))}>-</Button>
                    <p>{basket.count}</p>
                    <Button variant="outline-primary" onClick={()=>dispatch(increment(basket._id))}>+</Button>
                  </div>
                </td>
                <td>
                  <Button variant="outline-danger" onClick={()=>dispatch(removeBasket(basket._id))}>Remove</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <p style={{fontWeight:"bold"}}>Total:${total}</p>
    </div>
  )
}

export default Basket
