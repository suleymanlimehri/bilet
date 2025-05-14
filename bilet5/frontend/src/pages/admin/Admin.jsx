import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import "./Admin.css"
import { Link } from "react-router";
 import { useFormik } from 'formik';
import { addProduct, deleteProduct, getProduct } from '../../redux/features/ProductSlice';
import ProductSchema from '../../schema/ProductSchema';
const Basket = () => {
  let { allproduct } = useSelector(state => state.product)
  let dispatch = useDispatch()
   const formik = useFormik({
     initialValues: {
       image: '',
       title: '',
       name: '',
       desc: '',

     },
     onSubmit: values => {
      dispatch(addProduct(values))
      formik.resetForm()
     },
     validationSchema:ProductSchema
   });
  return (
    <div className='container' style={{ padding: "30px" }}>
      <form onSubmit={formik.handleSubmit} style={{display:"flex",flexDirection:"column",gap:"20px",width:"600px"}}>
        <input
          id="image"
          type="url"
          onChange={formik.handleChange}
          value={formik.values.image}
          placeholder='  Enter your Image'
        />
        {formik.errors.image? <span>{formik.errors.image}</span>:""}
         <input
          id="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
           placeholder='  Enter your Title'
        />
         {formik.errors.title? <span>{formik.errors.title}</span>:""}
         <input
          id="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
           placeholder='  Enter your Name'
        />
         {formik.errors.name? <span>{formik.errors.name}</span>:""}
         <input
          id="desc"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.desc}
           placeholder='  Enter your Description'
        />
         {formik.errors.desc? <span>{formik.errors.desc}</span>:""}

        <button type="submit" style={{padding:"10px",border:"none",color:"white",backgroundColor:"orange"}}>+Create</button>
      </form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              Image
            </th>
            <th>Title</th>
            <th>Name</th>
            <th>Description</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {
            allproduct.map((item) => (
              <tr key={item._id}>
                <td>
                  <img src={item.image} style={{ width: "100px" }} alt="" /></td>
                <td>{item.title}</td>
                <td>{item.name}</td>
                <td>
                  {item.desc}
                </td>
                <td>
                  <Button variant="warning" onClick={() => dispatch(deleteProduct(item._id))}>Remove</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" style={{ paddingBottom: "10px", borderBottom: "2px solid blue" }}>Back to Home</Link>
      </div>

    </div>
  )
}

export default Basket

