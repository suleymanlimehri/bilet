import React from 'react'
import "./Admin.css"
import Button from 'react-bootstrap/Button';
import * as yup from "yup"
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { addProduct, deleteProduct } from '../../../redux/features/ProductSlice';
const Admin = () => {
  let { allproduct } = useSelector(p => p.product)
  let dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      image: '',
      title: '',
      price: 0,
      desc: '',
    },
    onSubmit: values => {
      dispatch(addProduct(values))
      formik.resetForm()
    },
    validationSchema: yup.object({
      image: yup.string().required().url(),
      title: yup.string().required(),
      price: yup.number().required().positive(),
      desc: yup.string().required(),
    })
  });
  return (
    <div className='container admin'>
      <h2 style={{ textAlign: "center", padding: "20px", marginTop: "80px" }}>Admin Panel</h2>
      <form onSubmit={formik.handleSubmit}>
        <div  className='error'>{formik.errors.image}</div>
        <input
          id="image"
          type="url"
          onChange={formik.handleChange}
          value={formik.values.image}
          placeholder='  Enter your image'
        />
        <div  className='error'>{formik.errors.title}</div>
        <input
          id="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
          placeholder='  Enter your title'
        />
        <div  className='error'>{formik.errors.price}</div>
        <input
          id="price"
          type="number"
          onChange={formik.handleChange}
          placeholder='  Enter your price'
          value={formik.values.price}
        />
        <div className='error'>{formik.errors.desc}</div>
        <input
          id="desc"
          type="text"
          placeholder='  Enter your description'
          onChange={formik.handleChange}
          value={formik.values.desc}
        />
        <button type="submit">Submit</button>
      </form>
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
            allproduct.map((product) => (
              <tr key={product._id}>
                <td>
                  <img style={{ width: "300px", height: "300px" }} src={product.image} alt="" />
                </td>
                <td>
                  {product.title}
                </td>
                <td>
                  {product.price}
                </td>
                <td>{product.desc.slice(0, 200)}</td>
                <td>
                  <Button variant="outline-danger" onClick={() => dispatch(deleteProduct(product._id))}>Remove</Button>
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
