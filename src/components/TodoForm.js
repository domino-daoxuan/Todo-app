import { useState } from "react";
const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        complete: false
    });

    function handleTaskInputChange(e){
        // e.target.value contains new input from onChange
        // event for input elements
        setTodo({ ...todo, task: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();// prevents browser refresh
        addTodo({ ...todo, id: Math.random()});
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