import React from "react";
import styles from "./NotesApp.module.css";
import NotesForm from "./NotesForm/NotesForm.js";
import NotesList from "./NotesList/NotesList.js";
import { store } from "../../store/store.js";
import { Provider } from "react-redux";

const NotesApp = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <h1 className={styles.header}>Notes App</h1>

        <NotesForm />
        <NotesList />
      </div>
    </Provider>
  );
};

export default NotesApp;
