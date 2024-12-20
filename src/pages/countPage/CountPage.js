import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCount, resetCount } from '../../store/countSlice';

const CountPage = () => {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state.countReducer)
    const changeCountAction = (value) => {
        if(count + value <= 0) {
            dispatch(resetCount())
        } else {dispatch(changeCount(value))}
    }
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => changeCountAction(+1)}>+1</button>
        <button onClick={() => changeCountAction(-1)}>-1</button>
        <button onClick={() => changeCountAction(+10)}>+10</button>
        <button onClick={() => changeCountAction(-10)}>-10</button>
        <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  );
};

export default CountPage;