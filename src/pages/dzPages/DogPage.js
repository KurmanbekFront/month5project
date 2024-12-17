import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDog } from '../../redux/actions';

const DogPage = () => {
    const dispatch = useDispatch()
    const dogImage = useSelector(state => state.DzReducer.dogImage)
  return (
    <div className='text-center'>
        <h2>Random Dogs</h2>
        <Button onClick={() => dispatch(fetchDog())}>Get a dog</Button>
        {dogImage && <Image src={dogImage} alt="Random dog" fluid className='mt-3'/>}
    </div>
  );
};

export default DogPage;