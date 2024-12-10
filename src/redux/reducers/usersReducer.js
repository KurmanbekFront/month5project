import { types } from "../types"

const initialState = {
    users: [],
    loading: false,
    error: null
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.SEARCH_USER_REQUEST:
            return {...state, loading: true, error: null}
        case types.SEARCH_USER_SUCCESS:
            return {...state, loading: false, users: action.payload}
        case types.SEARCH_USER_FAILURE:
            return {...state, loading: false, error: action.payload}
    default:
        return state
    }
}