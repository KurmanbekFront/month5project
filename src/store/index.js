import {configureStore} from '@reduxjs/toolkit'
import mainReducer from './mainSlice'
import usersReducer from './usersSlice'
import countReducer from './countSlice'
import postsReducer from './postsSlice'
import tasksReducer from './tasksSlice'
export const store = configureStore({
    reducer: {
        mainReducer,
        usersReducer,
        countReducer,
        postsReducer,
        tasksReducer
    }
})