import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ContactsPage = () => {
    const title = useSelector(state => state.contactsTitle)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    
    const withParams = () => {
        dispatch({
            type: 'WITH_PARAMS',
            payload: "hello geeks"
        })
    }
    const changeTitle = () => {
        dispatch({
            type: "FROM_INPUT",
            payload: input
        })
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