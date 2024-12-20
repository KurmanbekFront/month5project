import {configureStore} from '@reduxjs/toolkit'
import mainReducer from './mainSlice'
import usersReducer from './usersSlice'
import countReducer from './countSlice'
export const store = configureStore({
    reducer: {
        mainReducer,
        usersReducer,
        countReducer
    }
})