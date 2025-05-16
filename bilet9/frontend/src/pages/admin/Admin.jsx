import React from 'react'
import "./Admin.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../../redux/features/ProductSlice';
import { useFormik } from 'formik';
import ProductSchema from '../../schema/ProductSchema';
const Admin = () => {
  let { allproduct } = useSelector(state => state.product)
  let dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      desc:"",
      price: 0
    },
    onSubmit: values => {
      dispatch(addProduct(values))
      formik.resetForm()
    },
    validationSchema: ProductSchema
  })
  return (
    <div className='container' style={{ paddingTop: "40px" }}>
      <h2 style={{ textAlign: "center" }}>Admin Panel</h2>
      <form action="" onSubmit={formik.handleSubmit} >
        <input type="url" name="image" placeholder='  Enter your image' onChange={formik.handleChange} />
        {formik.errors.image ? <span>{formik.errors.image}</span> : ''}
        <input type="text" name="title" placeholder='  Enter your title' onChange={formik.handleChange} />
        {formik.errors.title ? <span>{formik.errors.title}</span> : ''}
        <input type="text" name="price" placeholder='  Enter your price' onChange={formik.handleChange} />
        {formik.errors.price ? <span>{formik.errors.price}</span> : ''}
         <input type="text" name="desc" placeholder='  Enter your desc' onChange={formik.handleChange} />
        {formik.errors.desc ? <span>{formik.errors.desc}</span> : ''}
        <button type='submit' style={{padding:"10px",backgroundColor:"#7971ea",color:"white",border:"none",letterSpacing:"1.5px"}}>+Create</button>
      </form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {
            allproduct.map((admin) => (
              <tr key={admin._id}>
                <td>
                  <img style={{ width: "150px" }} src={admin.image} alt="" />
                </td>
                <td>{admin.title}</td>
                <td>${admin.price}</td>
                <td>
                  <button className='remove' onClick={() => dispatch(deleteProduct(admin._id))}>Remove</button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </Table>
    </div>
  )
}

export default Admin

