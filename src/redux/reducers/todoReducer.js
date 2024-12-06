import { types } from "../types";

const initialState = {
    tasks: [],
    filter: 'All Categories',
    categories: ['User', 'Business', 'Other']
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]}
        case types.DELETE_TODO:
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)}
        case types.TOGGLE_TASK:
            return {...state, tasks: state.tasks.map(task => task.id === action.payload ? 
                { ...task, completed: !task.completed } : task)}
        case types.EDIT_TODO:
            return {...state, tasks: state.tasks.map(task => task.id === action.payload.id ? 
                { ...task, text: action.payload.newText } : task)}
        case types.SET_FILTER:
            return {...state, filter: action.payload}
        default:
            return state;
    }
};