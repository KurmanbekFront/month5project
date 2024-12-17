import { types } from "./types";
import axios from "axios"

export const fetchCharacters = (page = 1) => async (dispatch) => {
    dispatch({type: types.FETCH_CHARACTER_REQUEST})
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        dispatch({type: types.FETCH_CHARACTER_SUCCESS, payload: response.data}) 
    } catch (error) {
        dispatch({type: types.FETCH_CHARACTER_FAILURE, error: error.message})
    }
}

export const addUserAction = (user) => async (dispatch) => {
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, options)
}

export const fetchCatSuccess = (catImage) => ({
    type: types.FETCH_CAT_SUCCESS,
    payload: catImage
})

export const fetchCat = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.thecatapi.com/v1/images/search`)
        dispatch(fetchCatSuccess(response.data[0].url))
    } catch (error) {
        console.error(`Failed to fetch cat:`, error);
        
    }
}

export const fetchJokeSuccess = (joke) => ({
    type: types.FETCH_JOKE_SUCCESS,
    payload: joke
})

export const fetchJoke = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://official-joke-api.appspot.com/random_joke`)
        const joke = `${response.data.setup} - ${response.data.punchline}`
        dispatch(fetchJokeSuccess(joke))
    } catch (error) {
        console.error(`Failed to fetch joke:`, error);
    }
}



////////////////////////////////////////////////////////////////
// 5 api request


// Random cat fact


const fetchCatFactSuccess = (catFact) => ({
    type: types.FETCH_FACT_SUCCESS,
    payload: catFact
})

export const fetchCatFact = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://catfact.ninja/fact`)
        dispatch(fetchCatFactSuccess(response.data))
    } catch (error) {
        console.error(`Failed to fetch cat fact:`, error);
    }
}

// Random dog image

const fetchDogSuccess = (dogImage) => ({
    type: types.FETCH_DOG_SUCCESS,
    payload: dogImage
})

export const fetchDog = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://dog.ceo/api/breeds/image/random`)
        dispatch(fetchDogSuccess(response.data)) 
    } catch (error) {
        console.error(`Failed to fetch dog image:`, error);
        
    }
}

// Random user

const fetchRandomUserSuccess = (randomUser) => ({
    type: types.FETCH_RANDOM_USER_SUCCESS,
    payload: randomUser
})

export const fetchRandomUser = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://randomuser.me/api/`)
        dispatch(fetchRandomUserSuccess(response))
    } catch (error) {
        console.error(`Failed to fetch random user:`, error);
    }
}

// Random quote

const fetchQuoteSuccess = (quote) => ({
    type: types.FETCH_QUOTE_SUCCESS,
    payload: quote
})

export const fetchQuote = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://perl.is/random`)
        dispatch(fetchQuoteSuccess(response.data.quote))
    } catch (error) {
        console.error(`Failed to fetch quote:`, error);
    }
}


// Random extinct animal

const fetchExtinctAnimalSuccess = (extinctAnimal) => ({
    type: types.FETCH_EXTINCT_ANIMAL_SUCCESS,
    payload: extinctAnimal
})

export const fetchExtinctAnimal = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://extinct-api.herokuapp.com/api/v1/animal/`)
        dispatch(fetchExtinctAnimalSuccess(response.data))
    } catch (error) {
        console.error(`Failed to fetch extinct animal:`, error);
    }
}