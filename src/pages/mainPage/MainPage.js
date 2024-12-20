import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputAction, changeTitleWithParams, clearInput, deleteTitle, mainInfo } from '../../store/mainSlice';

const MainPage = () => {
    const {title, inputValue} = useSelector(state => state.mainReducer)
    const dispatch = useDispatch()



    const changeTitle = () => {
        dispatch(mainInfo())
    }
    const withParamsChange = () => {
        dispatch(changeTitleWithParams(inputValue))
    }
    const changeInput = (e) => {
        dispatch(changeInputAction(e.target.value))
    }

    return (
        <div>
            <h1>{title}</h1>
            <input onChange={changeInput} value={inputValue} type='text' />
            <button onClick={() => dispatch(clearInput())}>clear</button>
            <button onClick={withParamsChange}>add</button>
            <button onClick={() => dispatch(deleteTitle())}>delete title</button>
            {/* <button onClick={changeTitle}>change title</button>
            <button onClick={withParamsChange}>change title with params</button> */}


        </div>
  );
};

export default MainPage;