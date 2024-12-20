import { combineReducers } from "redux";
import { CharacterReducer } from "./CharacterReducer";
import { CatReducer } from "./CatReducer";
import { DzReducer } from "./DzReducer";
export const rootReducer = combineReducers({
    CharacterReducer,
    CatReducer,
    DzReducer
})