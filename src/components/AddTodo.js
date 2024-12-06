import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTodo = () => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('User');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const task = {
        id: Date.now(),
        text,
        category,
        completed: false,
      };
      dispatch(addTask(task));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="User">User</option>
        <option value="Business">Business</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;