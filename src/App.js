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
import ChangeTitle from './components/ChangeTitle';
import UsersPage from './pages/usersPage/UsersPage';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import PokemonList from './components/PokemonList';



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
          {/* <h1>Todo List</h1>
          <TodoFilter categories={categories} onChange={handleFilterChange} />
          <AddTodo />
          <TodoList filter={filter} /> */}
          {/* <ChangeTitle /> */}
          {/* <UsersPage /> */}
          {/* <h1>GitHub User Search</h1>
          <SearchBar />
          <UserList /> */}
          <h1>Pokemons</h1>
          <PokemonList />
      </div>
  );
}

export default App;
