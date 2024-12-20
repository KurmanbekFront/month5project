import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, addUser } from '../../store/usersSlice';
const UsersPage = () => {
    const dispatch = useDispatch()
    const {users, inputValue} = useSelector(state => state.usersReducer)
    const changeInputFunc = (e) => {
        dispatch(changeInput(e.target.value))
    }
    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }
  return (
    <div>
        <input onChange={changeInputFunc} value={inputValue} type='text' placeholder='name'/>
        <button onClick={addUserFunc}>add user</button>
        {users.map(user => <p>{user}</p>)}
    </div>
  );
};

export default UsersPage;