import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";
function App() {
  const [todos, setTodos] = useState([]);

  // chay de lay du lieu tu local
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos){
      setTodos(storageTodos);
    }
  }, []);

  // luu du lieu vao local
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoList 
          todos={todos} 
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      </header>
    </div>
  );
}

export default App;
