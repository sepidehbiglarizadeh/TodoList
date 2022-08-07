import Todo from "../Todo/Todo";

const TodoList = ({ todos }) => {
    
  const renderTodos = () => {
    if (todos.length === 0) return <div>Add some todos</div>;

    return todos.map((todo) => {
      return <Todo todo={todo}/>
    });
  };

  return <div>{renderTodos()}</div>;
};

export default TodoList;
