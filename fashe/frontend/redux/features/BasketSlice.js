import {  createSlice } from '@reduxjs/toolkit'

export const BasketSlice = createSlice({
  name: 'basket',
  initialState: {
    allbasket:[]
  },
  reducers: {
    addBasket: (state,action) => {
      let findprod=state.allbasket.find((item)=>item._id==action.payload._id)
      if (!findprod) {
        state.allbasket.push({...action.payload,count:1})
      }else{
        findprod.count+=1
      }
    },
    increment: (state,action) => {
      let findprod=state.allbasket.find((item)=>item._id==action.payload)
      findprod.count++
    },
    decrement: (state, action) => {
       let findprod=state.allbasket.find((item)=>item._id==action.payload)
       if (findprod && findprod.count>1) {
        findprod.count--
       }
    },
    removeBasket: (state, action) => {
      state.allbasket=state.allbasket.filter((basket)=>basket._id!=action.payload)
    },
  },
})

export const { addBasket,removeBasket,decrement,increment } = BasketSlice.actions

export default BasketSlice.reducer