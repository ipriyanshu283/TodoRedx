import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos: []
}
export const tdSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>{
                return todo.id!== action.payload
            })
        },
    }
})
export const {addTodo, removeTodo} = tdSlice.actions
export default tdSlice.reducer