import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoItem from './TodoItem';

const TodoList = ({ filter }) => {
  const tasks = useSelector((state) => {
    return filter === 'All Categories' ? state.todoReducer.tasks : state.todoReducer.tasks.filter((task) => task.category === filter);
  });
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} dispatch={dispatch} />
      ))}
    </ul>
  );
};

export default TodoList;