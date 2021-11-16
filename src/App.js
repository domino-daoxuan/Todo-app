import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";
function App() {
  const [todos, setTodos] = useState([]);

  // chay lan dau ngay khi khoi dong de lay du lieu tu trang web
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

  const toggleComplete = (id) => {
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
