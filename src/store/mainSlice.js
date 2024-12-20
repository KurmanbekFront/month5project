import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        title: 'old title',
        inputValue: ''
    },
    reducers: {
        mainInfo: (state, action) => {
            state.title = 'new title'
        },
        changeTitleWithParams: (state, action) => {
            state.title = action.payload
            state.inputValue = ''
        },
        changeInputAction: (state, action) => {
            state.inputValue = action.payload
        },
        clearInput: (state, action) => {
            state.inputValue = ''
        },
        deleteTitle: (state, action) => {
            state.title = ''
            state.inputValue = ''
        }
    }
})

export const {mainInfo, changeTitleWithParams, changeInputAction, clearInput, deleteTitle} = mainSlice.actions
export default mainSlice.reducer