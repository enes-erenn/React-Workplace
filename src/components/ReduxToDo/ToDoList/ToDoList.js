import React from "react";
import styles from "./ToDoList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  remove,
  changeActiveFilter,
  clearCompleted,
  selectTodos,
  selectFilteredTodos,
  selectActiveFilter,
} from "../../../store/ReduxToDo/ToDoSlice.js";

const ToDoList = () => {
  const removeHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(remove(id));
    }
  };
  const dispatch = useDispatch();
  const items = useSelector(selectTodos);
  const activeFilter = useSelector(selectActiveFilter);
  const itemsLeft = items.filter((item) => !item.completed).length;

  const filteredTodos = useSelector(selectFilteredTodos);
  return (
    <section className={styles.main}>
      <ul className={styles["todo-list"]}>
        {filteredTodos.map((item) => (
          <li
            key={item.id}
            className={
              item.completed ? `${styles.completed}` : `${styles.list}`
            }
          >
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
            <button
              href="#/"
              className={activeFilter === "all" ? "selected" : ""}
              onClick={() => dispatch(changeActiveFilter("all"))}
            >
              All
            </button>
          </li>
          <li>
            <button
              href="#/"
              className={activeFilter === "active" ? "selected" : ""}
              onClick={() => dispatch(changeActiveFilter("active"))}
            >
              Active
            </button>
          </li>
          <li>
            <button
              href="#/"
              className={activeFilter === "completed" ? "selected" : ""}
              onClick={() => dispatch(changeActiveFilter("completed"))}
            >
              Completed
            </button>
          </li>
        </ul>

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
