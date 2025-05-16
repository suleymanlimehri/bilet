import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allbasket:[]
}

export const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state,action) => {
     let findprod=state.allbasket.find((item)=>item._id==action.payload._id)
     if (!findprod) {
        state.allbasket.push({...action.payload ,count:1})
     }else{
        findprod.count+=1
     }
    },
    removeBasket: (state,action) => {
     state.allbasket=state.allbasket.filter((basket)=>basket._id!=action.payload)
    },
    increment: (state,action) => {
     let findprod=state.allbasket.find((item)=>item._id==action.payload)
     findprod.count++
    },
    decrement: (state,action) => {
     let findprod=state.allbasket.find((item)=>item._id==action.payload)
     if (findprod && findprod.count>1) {
        findprod.count--
     }
    },
  },

})

export const { addBasket,removeBasket,increment,decrement } = BasketSlice.actions

export default BasketSlice.reducer