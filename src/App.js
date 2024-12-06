import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import CategoryFilter from './components/CategoryFilter';
import TaskList from './components/TaskList';
import { addTask, setFilter } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import TodoFilter from './components/TodoFilter';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';



function App() {
  // const [filter, setFilter] = useState("")

  const dispatch = useDispatch();
  const { filter, categories } = useSelector((state) => state.todoReducer);


  const handleFilterChange = (category) => {
    dispatch(setFilter(category));
  };

  return (
      <div className="app-container">
          {/* <h1>Task Manager</h1>
          <AddTask />
          <CategoryFilter onChange={setFilter}/>
          <TaskList filter={filter}/> */}
          <h1>Todo List</h1>
          <TodoFilter categories={categories} onChange={handleFilterChange} />
          <AddTodo />
          <TodoList filter={filter} />
      </div>
  );
}

export default App;
