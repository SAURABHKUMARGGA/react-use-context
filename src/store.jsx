import { createSlice,configureStore, combineReducers } from "@reduxjs/toolkit";

const counterSlicer = createSlice({
    name:"counter",
    initialState:{
        value:6
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

const incrementedBy = createSlice({
    name:"incby",
    initialState:{
        value:1,
        data:{
            name:"saurabh",
        }
    },
    reducers:{
        incby:(state, newValue)=>{
            // console.log(newValue);
            // console.log(typeof(newValue))
            state.value += newValue.payload;
        },
        changeName:(state,newName)=>{
            state.data.name = newName.payload;
        }
    }
})

export const {increment,decrement} = counterSlicer.actions;
export const {incby, changeName} = incrementedBy.actions;
// const RootReducers = combineReducers(counterSlicer,incrementedBy);
const store = configureStore({
    // reducer:RootReducers,
        reducer:{
            counter:counterSlicer.reducer,
            incbyby:incrementedBy.reducer,
        }
            
})
export default store;