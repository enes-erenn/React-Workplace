// Packages and Dependencies
import { useState } from "react";
import { useDispatch } from "react-redux";
// Styles
import styles from "./ToDoForm.module.css";
// Components
import { addToDo } from "../../../store/ReduxToDo/ToDoSlice.js";

const TodoInput = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim().length > 0) {
      dispatch(addToDo({ title }));
      setTitle("");
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <h2 className={styles.header}>To Do App</h2>
      <div>
        <input
          completed="false"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Add a to do"
        />
        <button className={styles.add} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};
export default TodoInput;
