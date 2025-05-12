import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import { addProduct, getProduct } from '../redux/features/ProductSlice';
const Admin = () => {
  const { allproduct } = useSelector(state => state.product)
  let dispatch = useDispatch()

  const formik = useFormik({
    Initialvalue:{
      image:"",
      name:"",
      title:"",
      price:0,
      desc:""
    },
    onSubmit:(values)=>{
      dispatch(addProduct(values))
      resetForm()
    }
  })
  let {values,handleChange,handleSubmit,resetForm}=formik
  let {image,title,price,desc,name}=values
  return (
    <>

      <div style={{ maxWidth: "1200px", margin: '0 auto', padding: "30px" }}>
        <h2 style={{ textAlign: "center", padding: "20px" }}>Admin Panel</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Setting</th>
            </tr>
          </thead>
          <tbody>
            {
              allproduct && allproduct.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img src={item.image} style={{ width: "150px", height: "100px" }} alt="" />
                  </td>
                  <td>{item.title.slice(0, 30)}</td>
                  <td>{item.price}</td>
                  <td>{item.desc.slice(0, 100)}</td>
                  <td>
                    <Button variant="danger" style={{ transform: "translateX(10%) translateY(50%)" }} onClick={() => dispatch(removeBasket(item._id))}>Remove</Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <div style={{ border: "1px solid black", padding: "20px", width: "650px", borderRadius: "10px" }}>
          <form action="" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px", width: "600px" }}>
            <input type="url" placeholder='  Enter your image' onChange={handleChange} value={image} id='image'/>
              <input type="text" placeholder='  Enter your name' onChange={handleChange} value={name} id='name'/>
            <input type="text" placeholder='  Enter your title' onChange={handleChange} value={title} id='title'/>
            <input type="number" placeholder='  Enter your price' onChange={handleChange} value={price} id='price'/>
            <input type="text" placeholder='  Enter your description' onChange={handleChange} value={desc} id='desc'/>
            <button type='submit' style={{ borderRadius: "10px", backgroundColor: "blue", color: "white", border: 'none', padding: "10px" }}>Create</button>
          </form>
        </div>

      </div>

    </>
  )
}

export default Admin
