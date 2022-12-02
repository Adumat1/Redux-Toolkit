import { configureStore } from "@reduxjs/toolkit";
// import { counterSlices } from "../slices/conuterSlices";
import counterReducer from '../slices/conuterSlices';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

export default store;