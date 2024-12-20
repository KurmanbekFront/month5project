import { types } from "../types";

const initialState = {
    loading: false,
    characters: [],
    error: null,
    info: {}
}

export const CharacterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CHARACTER_REQUEST:
            return {...state, loading: true,}
        case types.FETCH_CHARACTER_SUCCESS:
            return {...state, loading: false, characters: [...state.characters, ...action.payload.results],
                info: action.payload.info
            }
        case types.FETCH_CHARACTER_FAILURE:
            return {...state, loading: false, error: action.error}
        default:
            return state;
    }
}