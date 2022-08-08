import styles from "./Navbar.module.css";
import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "unCompleted", label: "unCompleted" },
];


const Navbar = ({ unCompletedTodos, selectedOption, onChange }) => {
  if (!unCompletedTodos) return <h2>Set your todos !</h2>;

  return (
    <header className={styles.header}>
      <span className={styles.span}>{unCompletedTodos}</span>
      <h2>Todo are not completed</h2>
      <div>
        <Select value={selectedOption} onChange={onChange} options={options} />
      </div>
    </header>
  );
};

export default Navbar;
