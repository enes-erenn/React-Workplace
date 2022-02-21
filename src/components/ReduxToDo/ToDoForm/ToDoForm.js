import { useState } from "react";
import styles from "./ToDoForm.module.css";
import { useDispatch } from "react-redux";
import { addToDo } from "../../../store/ReduxToDo/ToDoSlice.js";
import { nanoid } from "@reduxjs/toolkit";

const TodoInput = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addToDo({ id: nanoid(), title, completed: false }));
    setTitle("");
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
        />
        <button className={styles.add} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};
export default TodoInput;
