import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTask } from '../redux/actions';
// 
const TaskList = ({filter}) => {
    const tasks = useSelector((state) => filter ? state.taskReducer.filter((task) => task.category === filter) : state.taskReducer)
    const dispatch = useDispatch()
    
    return (
    <ul className='task-list'>
        {tasks.map((task) => (
            <li key={task.id} className={`task-item ${task.completed ? 'completed' : ""}`} onClick={() => dispatch(toggleTask(task.id))}>
                {task.text} <span>{tasks.category}</span>
            </li>
        ))}
    </ul>
  );
};

export default TaskList;