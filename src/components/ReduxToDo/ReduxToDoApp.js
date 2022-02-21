import React from "react";
import ToDoInput from "./ToDoForm/ToDoForm.js";
import ToDoList from "./ToDoList/ToDoList.js";
import styles from "./ReduxToDoApp.module.css";
import { store } from "../../store/store.js";
import { Provider } from "react-redux";

const ReduxToDoApp = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <div className={styles.todo}>
          <ToDoInput />
          <ToDoList />
        </div>
      </div>
    </Provider>
  );
};

export default ReduxToDoApp;
