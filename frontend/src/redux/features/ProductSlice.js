import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const initialState = {
  allproduct: [],
  filteredprod:[]
}
export const getProduct = createAsyncThunk("product/get",async()=>{
   let {data}=await axios.get("http://localhost:5000/api/products")
   return data
})
export const addProduct = createAsyncThunk("product/create",async(product)=>{
   let {data}=await axios.post("http://localhost:5000/api/products",product)
   return data
})
export const deleteProduct = createAsyncThunk("product/delete",async(id)=>{
   await axios.delete("http://localhost:5000/api/products")
   return id
})
export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    sortByHigh:(state)=>{
        state.allproduct=state.allproduct.sort((a,b)=>b.price-a.price)
    },
        sortBylow:(state)=>{
        state.allproduct=state.allproduct.sort((a,b)=>a.price-b.price)
    },
    search:(state,action)=>{
        state.allproduct=state.filteredprod.filter((product)=>product.name.toLowerCase().includes(action.payload.toLowerCase()))
    }
  },
    extraReducers: (builder) => {
    builder
    .addCase(getProduct.fulfilled, (state, action) => {
      state.allproduct=action.payload
      state.filteredprod=action.payload

    }).addCase(addProduct.fulfilled, (state, action) => {
      state.allproduct.push(action.payload)

    }).addCase(deleteProduct.fulfilled, (state, action) => {
        state.allproduct=state.allproduct.filter((item)=>item._id!=action.payload._id)
    })
  },
})

export const {sortByHigh,sortBylow,search}=ProductSlice.actions
export default ProductSlice.reducer