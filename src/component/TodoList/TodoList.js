import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = ({ todos, onCompleted, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodoHandler=(newValue)=>{
    onUpdateTodo(edit.id,newValue);
    setEdit({id:null,text:""})
  }

  const renderTodos = () => {
    if (todos.length === 0) return <div>Add some todos</div>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onCompleted={() => onCompleted(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  return (
    <div>
      {edit.id ? (
        <TodoForm submitTodoHandler={editTodoHandler} edit={edit}/>
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;
