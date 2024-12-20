import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatFact } from '../../redux/actions';

const CatFactPage = () => {
    const catFact = useSelector(state => state.DzReducer.catFact)
    const dispatch = useDispatch()
    
  return (
    <div className='text-center'>
        <h2>Random Cat Fact</h2>
        <Button onClick={() => dispatch(fetchCatFact())}>Get a random cat fact</Button>
        {catFact && <p className='mt-3'>{catFact}</p>}
    </div>
  );
};

export default CatFactPage;