import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    allbasket: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            let findprod = state.allbasket.find((item) => item._id == action.payload._id)
            if (!findprod) {
                state.allbasket.push({ ...action.payload, count: 1 })
            }else{
                findprod.count++
            }
        },
        increment: (state, action) => {
            let findprod = state.allbasket.find((item) => item._id == action.payload)
            findprod.count++
        },
        decrement: (state, action) => {
            let findprod = state.allbasket.find((item) => item._id == action.payload)
            if (findprod&& findprod.count>1) {
                 findprod.count--
            }
        },
        removeBasket: (state, action) => {
            state.allbasket = state.allbasket.filter((item) => item._id != action.payload)
        },
    },
})

export const {addBasket,increment,decrement,removeBasket} = basketSlice.actions

export default basketSlice.reducer