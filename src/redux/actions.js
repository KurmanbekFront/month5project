

import { types } from "./types";

import axios from "axios"


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


export function asyncFunctionAction () {
    return function () {
        setTimeout(() => {
            alert("Hello")
        }, 2000)
    }
}

function getUsersAction (users) {
    return {
        type: "USER",
        payload: users
    }
}

export function fetchUserAction () {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}

export const searchUserRequest = () => ({
    type: types.SEARCH_USER_REQUEST
})

export const searchUserSuccess = (users) => ({
    type: types.SEARCH_USER_SUCCESS,
    payload: users
})

export const searchUserFailure = (error) => ({
    type: types.SEARCH_USER_FAILURE,
    payload: error
})

export const fetchUsers = (query) => async (dispatch) => {
    dispatch(searchUserRequest())
    try {
        const response = await axios.get(`https://api.github.com/search/users?q=${query}`)
        dispatch(searchUserSuccess(response.data.items))
    } catch (error) {
        dispatch(searchUserFailure(error.message))
    }
}

/////////////////////////////////////////////
function getPokemonAction (pokemons) {
    return {
        type: "POKEMON",
        payload: pokemons
    }
}


export function fetchPokemonAction () {
    return async function (dispatch) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`)
        const data = await response.json()

        const pokemonsWithImages = [];

        for (let pokemon of data.results) {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonData = await pokemonResponse.json();
            
            pokemonsWithImages.push({
                name: pokemonData.name,
                imageUrl: pokemonData.sprites.other.dream_world.front_default,
            });
        }

        dispatch(getPokemonAction(pokemonsWithImages));

    }
}