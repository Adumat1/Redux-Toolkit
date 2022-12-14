import { configureStore } from "@reduxjs/toolkit";
// import { counterSlices } from "../slices/conuterSlices";
// import counterReducer from '../slices/conuterSlices';
import postReducer from '../slices/conuterSlices';

const store = configureStore({
    reducer: {
        post: postReducer,
    }
})

export default store;