import { types } from "../types"

const initialState = {
    contactsTItle: ""
}

export default function contactsReducer(state = initialState, action) {
    if(action.type === types.WITH_PARAMS) {
        return {...state, contactsTItle: action.payload}
    }
    return state
}