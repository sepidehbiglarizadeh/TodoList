import Todo from "../Todo/Todo";

const TodoList = ({ todos, onCompleted ,onDelete}) => {
  const renderTodos = () => {
    if (todos.length === 0) return <div>Add some todos</div>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onCompleted={() => onCompleted(todo.id)}
          onDelete={()=> onDelete(todo.id)}
        />
      );
    });
  };

  return <div>{renderTodos()}</div>;
};

export default TodoList;
