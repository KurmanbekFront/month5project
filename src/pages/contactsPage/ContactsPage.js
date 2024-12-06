import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withParamsAction } from '../../redux/actions';

const ContactsPage = () => {
    const title = useSelector(state => state.contactsReducer.contactsTItle)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    
    const withParams = () => {
        dispatch(withParamsAction("hello geeks"))
    }

    const changeTitle = () => {
        dispatch(withParamsAction(input))
    }
    
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={withParams}>Change title with params</button>
        <p>---------------------------------------</p>
        <input type='text' onChange={(e) => setInput(e.target.value)}/>
        <button onClick={changeTitle}>add</button>
    </div>
  );
};

export default ContactsPage;