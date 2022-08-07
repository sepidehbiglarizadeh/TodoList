import styles from "./Todo.module.css";

const Todo = ({ todo, onCompleted ,onDelete,onEdit}) => {
  return (
    <div className={styles.todo}>
      <div onClick={onCompleted} className={todo.isCompleted && styles.completed}>{todo.text}</div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
