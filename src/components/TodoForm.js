import { useState } from "react";
const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const handleTaskInputChange = (e) => {
        // e.target.value chua dau vao moi tu onChange
        // event cho cac thanh phan input
        setTodo({ ...todo, task: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();// ngan lam moi trinh duyet
        if (todo.task.trim()){ // trim() loai bo khoang trang chuoi
            addTodo({ ...todo, id: new Date().getTime().toString()});
            setTodo({...todo, task: "" });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="task" 
            value={ todo.task } 
            onChange={handleTaskInputChange}/>
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
}
 
export default TodoForm;