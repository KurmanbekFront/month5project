import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CountPage = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const increment = () => {
        dispatch({
            type: "INCREMENT"
        })
    }
    const decrement = () => {
        dispatch({
            type: "DECREMENT"
        })
    }
    const incrementTen = () => {
        dispatch({
            type: "INCREMENT_TEN"
        })
    }
    const decrementTen = () => {
        dispatch({
            type: "DECREMENT_TEN"
        })
    }
    const resetCount = () => {
        dispatch({
            type: "RESET_COUNT"
        })
    }


  return (
    <div>
      <h1>{count}</h1>
      <p>---------------------------------------------</p>
      <button onClick={increment}>+ 1</button>
      <button onClick={decrement}>- 1</button>
      <button onClick={incrementTen}>+ 10</button>
      <button onClick={decrementTen}>- 10</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default CountPage;