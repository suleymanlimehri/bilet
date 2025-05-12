import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allbasket: [],
    filteredprod: []
}

export const BasketSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            let findProduct = state.allbasket.find((item) => item._id === action.payload._id)
            if (!findProduct) {
                state.allbasket.push({ ...action.payload, count: 1 })
            } else {
                findProduct.count += 1
            }

        },
        increment: (state, action) => {
            let findProduct = state.allbasket.find((item) => item._id == action.payload._id)
            if (findProduct) {
                findProduct.count++
            }
        },
        decrement: (state, action) => {
            let findProduct = state.allbasket.find((item) => item._id == action.payload._id)
            if (findProduct && findProduct.count > 1) {
                findProduct.count--
            }
        },
        removeBasket: (state, action) => {
            state.allbasket = state.allbasket.filter((item) => item._id != action.payload)
        },
    },
})

export const { addBasket, increment, decrement,removeBasket } = BasketSlice.actions
export default BasketSlice.reducer