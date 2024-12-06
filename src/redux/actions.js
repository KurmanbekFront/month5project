import { types } from "./types";

export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    }
}

export function withParamsAction(text) {
    return {
        type: types.WITH_PARAMS,
        payload: text
    }
}

export const addTask = (task) => ({
    type: types.ADD_TASK,
    payload: task
})

export const deleteTodo = (id) => ({
    type: types.DELETE_TODO,
    payload: id,
})

export const editTodo = (id, newText) => ({
    type: types.EDIT_TODO,
    payload: {id, newText},
})

export const setFilter = (filter) => ({
    type: types.SET_FILTER,
    payload: filter,
})

export const toggleTask = (taskId) => ({
    type: types.TOGGLE_TASK,
    payload: taskId
})
