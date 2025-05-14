import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import "./Basket.css"
import { Link } from "react-router";
import { decrement, increment, removeBasket } from '../../redux/features/BasketSlice';
const Basket = () => {
  let { allbasket } = useSelector(state => state.basket)
  let dispatch = useDispatch()
  let total=allbasket.reduce((num,prod)=>num+prod.count,0)
  return (
    <div className='container' style={{padding:"30px"}}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              Image
            </th>
            <th>Title</th>
            <th>Name</th>
            <th>Count</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {
            allbasket.map((item) => (
              <tr key={item._id}>
                <td>
                  <img src={item.image} style={{width:"100px"}} alt="" /></td>
                <td>{item.title}</td>
                <td>{item.name}</td>
                <td>
                   <div style={{display:"flex",gap:"10px",justifyContent:"center",alignItem:"center"}}>
                    <button onClick={()=>dispatch(decrement(item._id))}   style={{height:"30px",width:"30px",border:"none",backgroundColor:"red",color:"white",fontWeight:"bold"}}>-</button>
                    <p>{item.count}</p>
                    <button onClick={()=>dispatch(increment(item._id))} style={{height:"30px",width:"30px",border:"none",backgroundColor:"red",color:"white",fontWeight:"bold"}}>+</button>
                   </div>
                </td>
                <td>
                    <Button variant="warning" onClick={()=>dispatch(removeBasket(item._id))}>Remove</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <Link to="/" style={{paddingBottom:"10px",borderBottom:"2px solid blue"}}>Back to Home</Link>
        <p>Total:{total}</p>
      </div>
      
    </div>
  )
}

export default Basket
