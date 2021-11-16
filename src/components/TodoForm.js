import { useState } from "react";
const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        complete: false
    });

    const handleTaskInputChange = (e) => {
        // e.target.value contains new input from onChange
        // event for input elements
        setTodo({ ...todo, task: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();// prevents browser refresh
        if (todo.task.trim()){
            addTodo({ ...todo, id: Math.random()});
            setTodo({...todo, task: "" });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="task" 
            value={ todo.task } 
            onChange={handleTaskInputChange}/>
            <button type="submit">Submit</button>
        </form>
    );
}
 
export default TodoForm;