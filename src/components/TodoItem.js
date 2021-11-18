const TodoItem = ({ id,task, completed, removeTodo, completeTodo }) => {
    return (
        <div className="todo">
            <li className={`todo-item ${completed ? "completed" : ""}`}>
                { task }
            </li>
            <button className="complete-btn" type="button" onClick={() => completeTodo(id)}>
              <i className="fas fa-check-square"></i>
            </button>
            <button className="trash-btn" type="button" onClick={() => removeTodo(id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    );
}
 
export default TodoItem;