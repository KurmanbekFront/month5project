import React from 'react';

const TodoFilter = ({ categories, onChange }) => {

    
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="All Categories">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default TodoFilter;