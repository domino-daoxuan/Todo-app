import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  const [todo, setTodos] = useState([]);
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>Todo App</h3>

        <TodoForm />
      </header>
    </div>
  );
}

export default App;
