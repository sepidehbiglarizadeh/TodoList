import styles from "./Navbar.module.css"

const Navbar = ({unCompletedTodos}) => {
    return ( 
        <header className={styles.header}>
            {unCompletedTodos ? (
                <>
                    <span>{unCompletedTodos}</span><h2>Todo are not completed</h2>
                </>
            ):(
                <h2>Set your todos !</h2>
            )}
        </header>
     );
}
 
export default Navbar;