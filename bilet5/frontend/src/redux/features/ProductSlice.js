import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const initialState = {
    allproduct: [],
    filterprod: [],
}
export const getProduct = createAsyncThunk("prod/get", async () => {
    let { data } = await axios.get("http://localhost:5000/api/product")
    return data
})
export const addProduct = createAsyncThunk("prod/create", async (products) => {
    let { data } = await axios.post("http://localhost:5000/api/product", products)
    return data
})
export const deleteProduct = createAsyncThunk("prod/delete", async (id) => {
    await axios.delete(`http://localhost:5000/api/product/${id}`)
    return id
})
export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        search: (state, action) => {
            console.log(action.payload)
            state.allproduct = state.filterprod.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase().trim()))
            console.log([...state.filterprod])
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.allproduct = action.payload
            state.filterprod = action.payload

        }).addCase(addProduct.fulfilled, (state, action) => {
            state.allproduct.push(action.payload)
        })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.allproduct = state.allproduct.filter((item) => item._id != action.payload)
            })
    },
})

export const { search } = ProductSlice.actions

export default ProductSlice.reducer