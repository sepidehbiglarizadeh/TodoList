import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completedHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const removeTodoHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodoHandler = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (value) => {
    switch (value) {
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "unCompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const selectHandler = (e) => {
    setSelectedOption(e);
    filterTodos(e.value);
  };

  return (
    <div className="container">
      <Navbar
        unCompletedTodos={todos.filter((t) => !t.isCompleted).length}
        selectedOption={selectedOption}
        onChange={selectHandler}
      />
      <TodoForm submitTodoHandler={addTodoHandler} />
      <TodoList
        todos={filteredTodos}
        onCompleted={completedHandler}
        onDelete={removeTodoHandler}
        onUpdateTodo={updateTodoHandler}
      />
    </div>
  );
};

export default TodoApp;
