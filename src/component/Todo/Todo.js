import styles from "./Todo.module.css"

const Todo = ({todo}) => {
    return ( 
        <div className={styles.todo} key={todo.id} >
          <div>{todo.text}</div>
          <div>
            <button>Edit</button>
            <button>Complete</button>
          </div>
        </div>
     );
}
 
export default Todo;