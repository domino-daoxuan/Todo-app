import { useState } from "react";
const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        complete: false
    });

    const handleTaskInputChange = (e) => {
        // e.target.value chua dau vao moi tu onChange
        // event cho cac thanh phan input
        setTodo({ ...todo, task: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();// ngan lam moi trinh duyet
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