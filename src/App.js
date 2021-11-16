import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    }));
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Todo App</h3>
        <TodoForm addTodo={addTodo}/>
        <TodoList 
          todos={todos} 
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      </header>
    </div>
  );
}

export default App;
