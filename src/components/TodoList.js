const TodoList = ({ todos, removeTodo, toggleComplete }) => {
    // console.log(todos);
    return (
        <ul>
        {todos.map(todo => (
          <div key={todo.id} style={{ display: "flex" }}>
            <li
              style={{
                textDecoration: todo.completed ? "line-through" : null // toan tu 3 ngoi
              }}
            >
            <input type="checkbox" checked={todo.completed}
              onClick={() => toggleComplete(todo.id)} />
              {todo.task}
            </li>
            <button type="button" onClick={() => removeTodo(todo.id)}>X</button>
          </div>
        ))}
      </ul>
    );
}
 
export default TodoList;