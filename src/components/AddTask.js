import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { addTask } from '../redux/actions';

const AddTask = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categoriesReducer)
    const [text, setText] = useState("")
    const [category, setCategory] = useState("Work")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim()) {
            const task = {
                id: Date.now(),
                text: text,
                category: category,
                completed: false
            }
            dispatch(addTask(task))
            setText("")
        }
    }
  return ( 
    <form onSubmit={handleSubmit} className='add-task-form'>
        <input type='text' value={text} placeholder='Add a new task' onChange={(e) => setText(e.target.value)}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
        </select>
        <button type='submit'>Add Task</button>
    </form>
  );
};

export default AddTask;