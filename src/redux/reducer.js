const initialState = {
    title: "old title",
    aboutTitle: "old about title",
    contactsTitle: '',
    count: 0
}

export default function reducer (state = initialState, action) {
    if(action.type === "CHANGE_TITLE") {
        return {... state, title: "new title"}
    } else if(action.type === "CHANGE_ABOUT_TITLE") {
        return {...state, aboutTitle: "new about title"}
    } else if(action.type === "WITH_PARAMS") {
        return {...state, contactsTitle: action.payload}
    } else if(action.type === "FROM_INPUT") {
        return {...state, contactsTitle: action.payload}
    } else if(action.type === "INCREMENT") {
        return {...state, count: state.count + 1}
    } else if(action.type === "DECREMENT") {
        return {...state, count: state.count > 0 ? state.count - 1 : 0 }
    } else if(action.type === "INCREMENT_TEN") {
        return {...state, count: state.count + 10}
    } else if(action.type === "DECREMENT_TEN") {
        return {...state, count: state.count > 10 ? state.count - 10 : 0 }
    } else if(action.type === "RESET_COUNT") {
        return {...state, count: 0}
    }
    
    return state
}