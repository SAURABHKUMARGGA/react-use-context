import { createSlice,configureStore } from "@reduxjs/toolkit";

const counterSlicer = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value = state.value+1;
        },
        decrement:(state)=>{
            state.value -= 1;
        }
    }
})
export const {increment,decrement} = counterSlicer.actions;


const store = configureStore({
        reducer:counterSlicer.reducer,
            
})
export default store;