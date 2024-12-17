import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExtinctAnimal } from '../../redux/actions';

const ExtinctAnimalPage = () => {
    const dispatch = useDispatch()
    const extinctAnimal = useSelector(state => state.DzReducer.extinctAnimal)

return (
    <div>
        <h2>Random extinct animal</h2>
        <Button onClick={() => dispatch(fetchExtinctAnimal())}>Get a random extinct animal</Button>
        {extinctAnimal.length !== 0 ? <div>
        <Image src={extinctAnimal.imageSrc} fluid />
        <h2>Common name: {extinctAnimal?.commonName}</h2>
        <h2>Binomial name: {extinctAnimal.binomialName}</h2>
        <h2>location: {extinctAnimal.location}</h2>
        <h2>Last record: {extinctAnimal.lastRecord}</h2>
        <p>Short desc: {extinctAnimal.shortDesc}</p>
        </div> : <></>}
    </div>
  );
};

export default ExtinctAnimalPage;