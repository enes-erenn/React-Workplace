import React from "react";
import styles from "./NotesApp.module.css";
import NotesForm from "./NotesForm/NotesForm.js";
import NotesList from "./NotesList/NotesList.js";

const NotesApp = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Notes App</h1>

      <NotesForm />
      <NotesList />
    </div>
  );
};

export default NotesApp;
