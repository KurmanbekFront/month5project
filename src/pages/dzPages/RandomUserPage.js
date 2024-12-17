import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomUser } from '../../redux/actions';
import { Button, Image } from 'react-bootstrap';

const RandomUserPage = () => {
    const dispatch = useDispatch()
    const randomUser = useSelector(state => state.DzReducer.randomUser)
    
  return (
    <div>
        <h2>Random user</h2>
        <Button onClick={() => dispatch(fetchRandomUser())}>Get a random user</Button>
        {randomUser.length !== 0 ? <div>
        <Image src={randomUser.picture?.thumbnail}/>
        <h3>name: {randomUser.name.title} {randomUser.name.first} {randomUser.name.last}</h3>
        <h3>age: {randomUser.dob.age}</h3>
        <h3>city: {randomUser.location.city}</h3>
        <h3>country: {randomUser.location.country}</h3>
            </div> : <div></div>}
        {/* {randomUser && <Image src={randomUser.picture.thumbnail}/>} */}
       
    </div>
  );
};

export default RandomUserPage;