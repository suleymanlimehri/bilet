import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  allproduct:[],
  filteredprod:[]
}
export const getProduct=createAsyncThunk("product/get",async()=>{
    let {data}=await axios.get("http://localhost:3000/api/product")
    return data
})
export const addProduct=createAsyncThunk("product/create",async(products)=>{
    let {data}=await axios.post("http://localhost:3000/api/product",products)
    return data
})
export const deleteProduct=createAsyncThunk("product/delete",async(id)=>{
   await axios.delete(`http://localhost:3000/api/product/${id}`)
    return id
})
export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    search: (state,action) => {
      state.allproduct=state.filteredprod.filter((item)=>item.title.toLowerCase().includes(action.payload.toLowerCase().trim()))
    },
    sortByHigh: (state) => {
     state.allproduct=state.allproduct.sort((a,b)=>b.price-a.price)
    },
    sortByLow: (state) => {
      state.allproduct=state.allproduct.sort((a,b)=>a.price-b.price)
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(getProduct.fulfilled,(state,action)=>{
        state.allproduct=action.payload
        state.filteredprod=action.payload
    }).addCase(addProduct.fulfilled,(state,action)=>{
        state.allproduct.push(action.payload)
    }).addCase(deleteProduct.fulfilled,(state,action)=>{
        state.allproduct=state.allproduct.filter((prod)=>prod._id!=action.payload)
    })
  }
})

export const { search, sortByLow, sortByHigh } = ProductSlice.actions

export default ProductSlice.reducer