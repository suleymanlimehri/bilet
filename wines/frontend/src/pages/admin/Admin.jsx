import React from 'react'
import "./Admin.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../../redux/features/ProductSlice';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup"
const Admin = () => {
  let { allproduct } = useSelector(p => p.product)
  let dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      price: 0,
      desc: ""
    },
    onSubmit: values => {
      dispatch(addProduct(values))
    },
    validationSchema: yup.object({
      image: yup.string().required(),
      title: yup.string().required(),
      price: yup.number().required(),
      desc: yup.string().required(),
    })
  });
  return (
    <div className='container'>
      <h2 style={{ textAlign: "center", padding: "30px" }}>Admin Panel</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="image"
          type="url"
          onChange={formik.handleChange}
          value={formik.values.image}
          placeholder='  Enter your Image'
        />
        {formik.errors.image ? <span>{formik.errors.image}</span> : ""}
        <input
          id="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
          placeholder='  Enter your title'
        />
        {formik.errors.title ? <span>{formik.errors.title}</span> : ""}
        <input
          id="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
          placeholder='  Enter your price'
        />
        {formik.errors.price ? <span>{formik.errors.price}</span> : ""}
        <input
          id="desc"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.desc}
          placeholder='  Enter your description'
        />
        {formik.errors.desc ? <span>{formik.errors.desc}</span> : ""}

        <button type="submit">+Create</button>
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
                  <img style={{ width: "200px" }} src={product.image} alt="" />
                </td>
                <td>
                  {product.title}
                </td>
                <td>
                  ${product.price}
                </td>
                <td>{product.desc.slice(0, 100)}</td>
                <td>
                  <Button variant="outline-danger" onClick={() => dispatch(deleteProduct(product._id))}>Remove</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <Link to="/">Back To Home</Link>
    </div>
  )
}

export default Admin
