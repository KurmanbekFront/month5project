import { types } from "../types";

const initialTaskState = []

export default function taskReducer(state = initialTaskState, action) {
    switch(action.type) {
        case types.ADD_TASK:
            return [...state, action.payload]
        case types.TOGGLE_TASK:
            return state.map((task) => task.id === action.payload ? {...task, completed: !task.completed} : task)
        default: return state    
    }
}

const initialCategoriesState = ["Work", "Personal", "Other"]

export const categoriesReducer = (state = initialCategoriesState, action) => {
    return state
}