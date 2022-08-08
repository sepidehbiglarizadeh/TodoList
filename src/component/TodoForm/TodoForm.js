import { useEffect, useRef, useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState(
    props.edit ? props.edit.text : ""
  );
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
      <div className={styles.formControl}>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          onChange={changeHandler}
          placeholder={props.edit ? "update todo..." : "add todo..."}
          ref={inputRef}
        />
        <button className={`${styles.btn} ${props.edit ? styles.update : styles.add}`} type="submit">{props.edit ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default TodoForm;
