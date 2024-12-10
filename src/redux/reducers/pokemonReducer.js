

const initialState = {
    pokemons: [],
}

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case "POKEMON":
            return {...state, pokemons: action.payload}
    default:
        return state
    }
}