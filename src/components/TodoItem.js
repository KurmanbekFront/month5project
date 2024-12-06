import React, { useState } from 'react';
import { deleteTodo, toggleTask, editTodo } from '../redux/actions';

const TodoItem = ({ task, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if(newText === "") return
    dispatch(editTodo(task.id, newText));
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
            onClick={() => dispatch(toggleTask(task.id))}
          >
            {task.text}
          </span>
          <button onClick={() => dispatch(deleteTodo(task.id))}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;