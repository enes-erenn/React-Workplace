import React from "react";
import styles from "./ToDoList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggle, remove } from "../../../store/ReduxToDo/ToDoSlice.js";

const ToDoList = () => {
  const removeHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(remove(id));
    }
  };
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);
  return (
    <section className={styles.main}>
      <ul className={styles["todo-list"]}>
        {items.map((item) => (
          <li key={item.id} className={item.completed ? "completed" : "list"}>
            <div className={styles.view}>
              <input
                className={styles.toggle}
                type="checkbox"
                checked={item.completed}
                onChange={() => dispatch(toggle({ id: item.id }))}
              />
              <label>{item.title}</label>
            </div>
            <button
              className={styles.remove}
              onClick={() => removeHandler(item.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <footer className={styles.footer}>
        <span className={styles["todo-count"]}>
          <strong>2</strong>
          items left
        </span>

        <ul className={styles.filters}>
          <li>
            <a href="#/" className={styles.selected}>
              All
            </a>
          </li>
          <li>
            <a href="#/">Active</a>
          </li>
          <li>
            <a href="#/">Completed</a>
          </li>
        </ul>
        <input className={styles["toggle-all"]} type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <button className={styles["clear-completed"]}>Clear completed</button>
      </footer>
    </section>
  );
};

export default ToDoList;
