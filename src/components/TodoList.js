const TodoList = ({ todos, removeTodo, toggleComplete }) => {
    // console.log(todos);
    return (
        <ul>
        {todos.map(todo => (
          <div key={todo.id} style={{ display: "flex" }}>
            <li
              style={{
                  // toan tu 3 ngoi
                textDecoration: todo.completed ? "line-through" : null
              }}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.task}
            </li>
            <button onClick={() => removeTodo(todo.id)}>X</button>
          </div>
        ))}
      </ul>
    );
}
 
export default TodoList;