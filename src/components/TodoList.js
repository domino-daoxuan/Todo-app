import TodoItem from "./TodoItem";

const TodoList = ({ removeTodo, completeTodo, filteredTodos }) => {
    // console.log(todos);
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map(todo => {
            return(
              <TodoItem
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