import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncFunctionAction } from '../redux/actions';

const ChangeTitle = () => {
    const dispatch = useDispatch()
    const changeAboutTitle = () => {
        dispatch({
            type: "CHANGE_ABOUT_TITLE"
        })
    }
  return (
    // <button onClick={changeAboutTitle}>Change about title</button>
    <button onClick={() => dispatch(asyncFunctionAction())}>after 2 sec</button>
  );
};

export default ChangeTitle;