import { configureStore } from '@reduxjs/toolkit'
import  ProductSlice  from '../features/ProductSlice'
import  BasketSlice  from '../features/BasketSlice'

export default configureStore({
  reducer: {
    product:ProductSlice,
    basket:BasketSlice
  },
})