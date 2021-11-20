import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = "list-todos";
const ALL = "all";
const COMPLETED = "completed";
const UNCOMPLETED = "uncompleted";
function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(ALL);
  const [filteredTodos, setFilteredTodos] = useState([]);

  // chay de lay du lieu tu local
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    handleFilterTodos();
    saveLocalTodos();
  },[todos, status]);// eslint-disable-line react-hooks/exhaustive-deps

  //==========================================

  const getLocalTodos = () => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos){
      setTodos(storageTodos);
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }
  
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const completeTodo = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed // thay doi gia tri cua complete
        };
      }
      return todo;
    }));
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const handleFilterTodos = () => {
    switch (status) {
      case COMPLETED:
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case UNCOMPLETED:
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const editTodo = (id) => {
    
  }

  //============================================

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <TodoForm 
          addTodo={addTodo}
          setStatus={setStatus}
          />
        <TodoList 
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          filteredTodos={filteredTodos}
          editTodo={editTodo}
        />
      </header>
    </div>
  );
}

export default App;
