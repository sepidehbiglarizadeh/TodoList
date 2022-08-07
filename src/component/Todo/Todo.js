import styles from "./Todo.module.css";

const Todo = ({ todo, onCompleted }) => {
  return (
    <div className={styles.todo}>
      <div className={todo.isCompleted && styles.completed}>{todo.text}</div>
      <div>
        <button>Edit</button>
        <button onClick={onCompleted}>Complete</button>
      </div>
    </div>
  );
};

export default Todo;
