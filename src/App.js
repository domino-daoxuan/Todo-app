import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  
  function addTodo(todo){
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Todo App</h3>

        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
