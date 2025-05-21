import React from 'react'
import "./Admin.css"
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import * as yup from "yup"
import { addProduct, deleteProduct, search, sortByHigh, sortByLow } from '../../redux/features/ProductSlice';
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
    },
    validationSchema: yup.object({
      image: yup.string().required(),
      title: yup.string().required(),
      price: yup.number().required(),
      desc: yup.string().required(),
    })
  });
  return (
    <div className='container' style={{ marginTop: "120px" }}>
      <h2 style={{ textAlign: "center", paddidng: "20px" }}>Admin Panel</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="image"
          type="url"
          placeholder='  Enter your image'
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        {formik.errors.image? <span>{formik.errors.image}</span>:""}
        <input
          id="title"
          type="text"
          placeholder='  Enter your title'
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title? <span>{formik.errors.title}</span>:""}
        <input
          id="price"
          type="text"
          placeholder='  Enter your price'
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.errors.price? <span>{formik.errors.price}</span>:""}
        <input
          id="desc"
          type="text"
          placeholder='  Enter your desc'
          onChange={formik.handleChange}
          value={formik.values.desc}
        />
        {formik.errors.image? <span>{formik.errors.image}</span>:""}
        <button type="submit">+Create</button>
      </form>
      <div className="search-sort">
        <input type="search" placeholder='  Enter your search' onChange={(e) => dispatch(search(e.target.value))} />
        <div className="button">
          <Button variant="danger" onClick={() => dispatch(sortByHigh())}>HighToLow</Button>
          <Button variant="danger" onClick={() => dispatch(sortByLow())}>LowToHigh</Button>
        </div>
      </div>
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
                  <img className='image-card' src={product.image} alt="" />
                </td>
                <td>
                  {product.title}
                </td>
                <td style={{ fontWeight: "bold" }}>
                  ${product.price}
                </td>
                <td>
                  {product.desc.slice(0, 150)}
                </td>
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
