import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'countSlice',
    initialState: {
        count: 0
    },
    reducers: {
        changeCount: (state, action) => {
            state.count += action.payload
        },
        resetCount: (state, action) => {
            state.count = 0
        }
    }
})

export const {changeCount, resetCount} = countSlice.actions
export default countSlice.reducer