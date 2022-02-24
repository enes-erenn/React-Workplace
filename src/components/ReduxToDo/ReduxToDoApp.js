// Packages and Dependencies
import { Provider } from "react-redux";
// Styles
import styles from "./ReduxToDoApp.module.css";
// Components
import ToDoInput from "./ToDoForm/ToDoForm.js";
import ToDoList from "./ToDoList/ToDoList.js";
import { store } from "../../store/store.js";
import Button from "../Button/Button.js";

const ReduxToDoApp = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <div className={styles.todo}>
          <ToDoInput />
          <ToDoList />
        </div>
        <Button />
      </div>
    </Provider>
  );
};

export default ReduxToDoApp;
