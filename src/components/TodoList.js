import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, completeTodo }) => {
    // console.log(todos);
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map(todo => {
            return(
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            );
          })}
        </ul>
      </div>
    );
}
 
export default TodoList;