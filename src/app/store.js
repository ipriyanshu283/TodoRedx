import {configureStore} from '@reduxjs/toolkit'
import tdReducer from '../features/todo/tdSlice'
export const store = configureStore({
    reducer: tdReducer
})