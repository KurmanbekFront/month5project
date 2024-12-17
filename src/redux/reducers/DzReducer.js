import ExtinctAnimalPage from "../../pages/dzPages/ExtinctAnimalPage"
import { types } from "../types"

const initialState = {
    catFact: '',
    dogImage: '',
    randomUser: [],
    quote: '',
    extinctAnimal: []
}

export const DzReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_FACT_SUCCESS:
            return {...state, catFact: action.payload.fact}
        case types.FETCH_DOG_SUCCESS:
            return {...state, dogImage: action.payload.message}
        case types.FETCH_RANDOM_USER_SUCCESS:
            return {...state, randomUser: action.payload.data.results[0]}
        case types.FETCH_QUOTE_SUCCESS:
            return {...state, quote: action.payload}
        case types.FETCH_EXTINCT_ANIMAL_SUCCESS:
            return {...state, extinctAnimal: action.payload.data[0]}
        default:
            return state
    }
} 