import React from "react";
import styles from "./ToDoList.module.css";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const items = useSelector((state) => state.todos.items);
  console.log(items);
  return (
    <div>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <div>
              <input type="checkbox" name="" id="" />
              <label>{item.title}</label>
              <button></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
