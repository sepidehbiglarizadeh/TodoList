import styles from "./Todo.module.css";

const Todo = ({ todo, onCompleted ,onDelete,onEdit}) => {
  return (
    <div className={styles.todo}>
      <div onClick={onCompleted} className={todo.isCompleted && styles.completed}>{todo.text}</div>
      <div>
        <button className={styles.btn} onClick={onEdit}>Edit</button>
        <button className={`${styles.btn} ${styles.remove}`} onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
