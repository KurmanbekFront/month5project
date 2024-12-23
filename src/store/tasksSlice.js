import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTask } from "../components/TasksApi";

export const loadTask = createAsyncThunk(
    'tasks/loadTasks',
    async () => {
        const tasks = await fetchTask()
        return tasks
    }
) 

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        status: 'idle'
    },
    reducers: {
        addTask: (state, action) => {
            state.items.push(action.payload)
        },
        toggleTask: (state, action) => {
            const task = state.items.find((task) => task.id === action.payload)
            if(task) {
                task.completed = !task.completed
            }
        },
        deleteTask: (state, action) => {
            state.items = state.items.filter((task) => task.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadTask.pending, (state) => {
                state.status = "loading"
            })
            .addCase(loadTask.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(loadTask.rejected, (state) => {
                state.status = "failed"
            })
    }
})

export const {addTask, toggleTask, deleteTask} = taskSlice.actions
export default taskSlice.reducer