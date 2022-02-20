import React from "react";
import ToDoInput from "./ToDoInput/ToDoInput.js";
import ToDoList from "./ToDoList/ToDoList.js";
import styles from "./ReduxToDoApp.module.css";

const ReduxToDoApp = () => {
  return (
    <div className={styles.container}>
      <ToDoInput />
      <ToDoList />
    </div>
  );
};

export default ReduxToDoApp;
