import React from "react";
import styles from "./ToDoList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  remove,
  changeActiveFilter,
  clearCompleted,
} from "../../../store/ReduxToDo/ToDoSlice.js";

const ToDoList = () => {
  const removeHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(remove(id));
    }
  };
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const itemsLeft = items.filter((item) => !item.completed).length;
  let filtered = items;

  if (activeFilter !== "all") {
    filtered = items.filter((todo) =>
      activeFilter === "active"
        ? todo.completed === false
        : todo.completed === true
    );
  }
  return (
    <section className={styles.main}>
      <ul className={styles["todo-list"]}>
        {filtered.map((item) => (
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
          <strong>{itemsLeft} </strong>
          left
        </span>

        <ul className={styles.filters}>
          <li>
            <a
              href="#/"
              className={activeFilter === "all" ? "selected" : ""}
              onClick={() => dispatch(changeActiveFilter("all"))}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeFilter === "active" ? "selected" : ""}
              onClick={() => dispatch(changeActiveFilter("active"))}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeFilter === "completed" ? "selected" : ""}
              onClick={() => dispatch(changeActiveFilter("completed"))}
            >
              Completed
            </a>
          </li>
        </ul>
        <input className={styles["toggle-all"]} type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <button
          className={styles["clear-completed"]}
          onClick={() => dispatch(clearCompleted())}
        >
          Clear completed
        </button>
      </footer>
    </section>
  );
};

export default ToDoList;
