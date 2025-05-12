import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeBasket } from '../../redux/features/BasketSlice';

const Basket = () => {
  const { allbasket } = useSelector(state => state.basket)
  let dispatch = useDispatch()
  console.log(allbasket)
  let total=allbasket.reduce((num,prod)=>num+prod.count*prod.price,0)
  return (
    <>
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
            allbasket && allbasket.map((item) => (
              <tr key={item._id}>
                <td>
                  <img src={item.image} style={{ width: "150px", height: "100px" }} alt="" />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <div className="count-area" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"80px",gap:"15px"}}>
                    <div className="plusbtn">
                      <Button variant="danger">+</Button>
                    </div>
                    <div className="count">
                      <p>{item.count}</p>
                    </div>
                    <div className="minusbtn">
                      <Button variant="danger">-</Button>
                    </div>
                  </div>
                </td>
                <td>
                  <Button variant="danger" style={{transform:"translateX(10%) translateY(50%)"}} onClick={()=>dispatch(removeBasket(item._id))}>Remove</Button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </Table>
      <p>Total:{total}</p>
    </>

  )
}

export default Basket
