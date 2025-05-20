import React from 'react'
import "./Admin.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../../redux/features/ProductSlice';
import { useFormik } from 'formik';
import * as yup from "yup"
const Admin = () => {
  let { allproduct } = useSelector(p => p.product)
  let dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      image: '',
      title: "",
      price: 0,
      desc: "",
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
      <h2 style={{ padding: "20px", textAlign: "center", fontVariant: "small-caps",marginTop:"120px"}}>Admin Panel</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="image"
          placeholder='  Enter your image'
          type="url"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        {formik.errors.image? <span>{formik.errors.image}</span>:""}
        <input
          name="title"
          placeholder='  Enter your title'
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
         {formik.errors.title? <span>{formik.errors.title}</span>:""}
        <input
          name="price"
          placeholder='  Enter your price'
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
         {formik.errors.price? <span>{formik.errors.price}</span>:""}
        <input
          name="desc"
          placeholder='  Enter your desc'
          type="text"
          onChange={formik.handleChange}
          value={formik.values.desc}
        />
         {formik.errors.desc? <span>{formik.errors.desc}</span>:""}
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
            allproduct.map((prod) => (
              <tr key={prod._id}>
                <td>
                  <img src={prod.image} style={{ width: "150px" }} alt="" />
                </td>
                <td>{prod.title}</td>
                <td>
                  {prod.price}
                </td>
                <td>
                  {prod.desc.slice(0, 200)}
                </td>
                <td>
                  <Button variant="outline-danger" onClick={() => dispatch(deleteProduct(prod._id))}>Remove</Button>
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
