const TodoList = ({ todos }) => {
    console.log(todos);
    return (
        <ul>
            {todos.map(todo => {
                return(
                    <li key={todo.id}>
                        {todo.task}
                    </li>
                );
            })}
        </ul>
    );
}
 
export default TodoList;