// import { createSlice } from '@reduxjs/toolkit';

// //initialState
// const initialState = {
//     value: 0,
// }

// export const counterSlices = createSlice({
//     name: "counter",
//     initialState,
//     reducers: {
//         increment: (state, action) => {
//             state.value++;
//         },
//         decrement: (state, action) => {
//             state.value--;
//         },
//         increaseAmount: (state, action) => {
//             state.value += action.payload;
//         },
//     }
// });

// //generate the action creators
// export const { increment, decrement, increaseAmount } = counterSlices.actions;

// //export reducers
// export default counterSlices.reducer;


//Using external API
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//create the action

export const fetchPost = createAsyncThunk(
    "post/list",
    async (payload, { rejectedValue, getState, dispatch }) => {
        try {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            return data;
        } catch (error) {
            return error?.response
        }
    }
);

//slices
const postSlices = createSlice({
    name: "post",
    initialState: {},
    extraReducers: {
        //Handling pending state
        [fetchPost.pending]: (state, action) => {
            state.loading = true;
        },
        //Handling fulfilled state
        [fetchPost.fulfilled]: (state, action) => {
            state.postsList = action.payload;
            state.loading = false;
        },
        //Handling rejection
        [fetchPost.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});


export default postSlices.reducer;