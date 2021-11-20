const TodoItem = ({ id,task, completed, removeTodo, completeTodo, editTodo }) => {
    return (
        <div className="todo">
            <label class="container">
              <input type="checkbox" onClick={() => completeTodo(id)} checked={completed}/>
              <span class="checkmark"></span>
            </label>
            <li className={`todo-item ${completed ? "completed" : ""}`}>
                { task }
            </li>          
            <button className="trash-btn" type="button" onClick={() => removeTodo(id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    );
}
 
export default TodoItem;