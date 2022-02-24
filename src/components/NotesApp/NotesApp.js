// Packages and Dependencies
import { Provider } from "react-redux";
// Styles
import styles from "./NotesApp.module.css";
// Components
import NotesForm from "./NotesForm/NotesForm.js";
import NotesList from "./NotesList/NotesList.js";
import { store } from "../../store/store.js";
import Button from "../Button/Button.js";

const NotesApp = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <h1 className={styles.header}>Notes App</h1>

        <NotesForm />
        <NotesList />
        <Button />
      </div>
    </Provider>
  );
};

export default NotesApp;
