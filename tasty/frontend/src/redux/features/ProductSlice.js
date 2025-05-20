import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const initialState = {
 allproduct:[],
 filterprod:[]
}
export const getProduct=createAsyncThunk("products/get",async()=>{
    let res=await axios.get("http://localhost:4000/api/product")
    return res.data
})
export const addProduct=createAsyncThunk("products/create",async(products)=>{
    let {data}=await axios.post("http://localhost:4000/api/product",products)
    return data
})
export const deleteProduct=createAsyncThunk("products/delete",async(id)=>{
    await axios.delete(`http://localhost:4000/api/product/${id}`)
    return id
})

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    search:(state,action)=>{
        state.allproduct=state.filterprod.filter((item)=>item.title.toLowerCase().includes(action.payload.toLowerCase().trim()))
    },
    sortByHigh: (state) => {
      state.allproduct=state.allproduct.sort((a,b)=>b.price-a.price)
    },
    sortByLow: (state) => {
       state.allproduct=state.allproduct.sort((a,b)=>a.price-b.price)
    },
  },
   extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.allproduct=action.payload
       state.filterprod=action.payload
    }).addCase(addProduct.fulfilled, (state, action) => {
      state.allproduct.push(action.payload)
    }).addCase(deleteProduct.fulfilled, (state, action) => {
      state.allproduct=state.allproduct.filter((item)=>item._id!=action.payload)
    })
  },
})

export const { sortByHigh,sortByLow,search} = ProductSlice.actions

export default ProductSlice.reducer