import React from "react";
import styles from "./ToDoInput.module.css";

const TodoInput = () => {
  return (
    <form className={styles.form}>
      <h2 className={styles.header}>To Do App</h2>
      <div>
        <input className={styles.input} type="text" />
        <button className={styles.add} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
