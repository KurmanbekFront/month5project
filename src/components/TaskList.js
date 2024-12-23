import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { loadTask } from '../store/tasksSlice';

const TaskList = () => {
    const {items, status} = useSelector(state => state.tasksReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        if(status === 'idle') {
            dispatch(loadTask())
        }
    }, [dispatch, status])

    if(status === 'loading') {
        return <p>loading tasks...</p>
    }

    if(status === 'failed') {
        return <p>Failed to load tasks. Please try again.</p>
    }

    return (
    <ul>
        {items.map((task) => (
            <TaskItem key={task.id} task={task}/>
        ))}
    </ul>
  );
};

export default TaskList;