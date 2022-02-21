import React from "react";
import styles from "./NotesForm.module.css";
import { addNote } from "../../../store/ReduxNotes/ReduxNotes/NotesSlice.js";
import { useState } from "react";
import { useDispatch } from "react-redux";

const NotesForm = () => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNote({ note }));
    setNote("");
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <textarea
        autoFocus={true}
        className={styles.text}
        placeholder="Enter your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <div className={styles.controls}>
        <div className={styles.colors}>
          <button className={styles.color}></button>
          <button className={styles.color}></button>
          <button className={styles.color}></button>
          <button className={styles.color}></button>
          <button className={styles.color}></button>
        </div>
        <button className={styles.add}>ADD</button>
      </div>
    </form>
  );
};

export default NotesForm;
