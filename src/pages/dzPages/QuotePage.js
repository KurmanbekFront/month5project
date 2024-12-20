import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../../redux/actions';

const QuotePage = () => {
    const dispatch = useDispatch()
    const quote = useSelector(state => state.DzReducer.quote)
    
  return (
    <div>
        <h2>Random quote</h2>
        <Button onClick={() => dispatch(fetchQuote())}>Get a random quote</Button>
        {quote && <p>{quote}</p>}
    </div>
  );
};

export default QuotePage;