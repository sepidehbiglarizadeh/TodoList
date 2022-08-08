import { useEffect, useRef, useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!inputValue) {
      alert("Enter Todo!!");
      return;
    }

    props.submitTodoHandler(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      {props.edit ? (
        <>
          <input
            className={styles.input}
            type="text"
            value={inputValue}
            onChange={changeHandler}
            placeholder="update todo"
            ref={inputRef}
          />
          <button type="submit">Update</button>
        </>
      ) : (
        <>
          <input
            className={styles.input}
            type="text"
            value={inputValue}
            onChange={changeHandler}
            placeholder="add todo"
            ref={inputRef}
          />
          <button type="submit">Add</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
