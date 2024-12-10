import { combineReducers } from "redux";
import titleReducer from "./titleReducer";
import contactsReducer from "./contactsReducer";
import taskReducer, { categoriesReducer } from "./taskReducer";
import { todoReducer } from "./todoReducer";
import usersReducer from "./usersReducer";
import pokemonReducer from "./pokemonReducer";
export const rootReducer = combineReducers({
    titleReducer,
    contactsReducer,
    taskReducer,
    categoriesReducer,
    todoReducer,
    usersReducer,
    pokemonReducer
})