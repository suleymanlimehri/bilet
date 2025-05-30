import { configureStore } from "@reduxjs/toolkit"
import ProductSlice from "../features/ProductSlice"
import BasketSlice from "../features/BasketSlice"
export const store = configureStore({
    reducer: {
        product: ProductSlice,
        basket: BasketSlice
    }
})