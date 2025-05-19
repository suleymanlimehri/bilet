import {  createSlice } from '@reduxjs/toolkit'
const initialState = {
  allbasket:[],
}

export const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state,action) => {
        let finprod=state.allbasket.find((item)=>item._id==action.payload._id)
        if (!finprod) {
            state.allbasket.push({...action.payload,count:1})
        }else{
            finprod.count+=1
        }
    },
    increment: (state,action) => {
       let finprod=state.allbasket.find((item)=>item._id==action.payload)
        finprod.count++
    },
    decrement: (state,action) => {
       let finprod=state.allbasket.find((item)=>item._id==action.payload)
        if (finprod && finprod.count>1){
            finprod.count--
        }
    },
    removeBasket:(state,action)=>{
        state.allbasket=state.allbasket.filter((item)=>item._id!=action.payload)
    }
  },
})

export const {addBasket,increment,decrement,removeBasket} = BasketSlice.actions

export default BasketSlice.reducer