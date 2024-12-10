import React, { useState ,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonAction, getPokeData, } from '../redux/actions';

const PokemonList = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemonReducer.pokemons)
   
    useEffect(() => {
        dispatch(fetchPokemonAction())
    }, [])
  return (
    <div className='pokemon-list'> 
        {pokemons.map((pokemon, index) => (
        <div key={index} className='pokemon-item'>
          <img src={pokemon.imageUrl} alt="pokemon"/>
          <h3>{pokemon.name}</h3>
        </div>
        ))}
    </div>
  );
};

export default PokemonList;