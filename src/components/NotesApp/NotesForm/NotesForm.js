import React from "react";
import styles from "./NotesForm.module.css";
import { addNote } from "../../../store/ReduxNotes/NotesSlice.js";
import { useState } from "react";
import { useDispatch } from "react-redux";

const NotesForm = () => {
  const [note, setNote] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (color) {
      dispatch(addNote({ note, color }));
      return setNote("");
    }
    alert("Please pick a color");
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <textarea
        autoFocus={true}
        className={styles.text}
        placeholder="Enter your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        required={true}
      ></textarea>
      <div className={styles.controls}>
        <div className={styles.colors}>
          <div
            className={styles.color}
            onClick={() => setColor("#9e0059")}
          ></div>
          <div
            className={styles.color}
            onClick={() => setColor("#ff5d8f")}
          ></div>
          <div
            className={styles.color}
            onClick={() => setColor("#ffbd00")}
          ></div>
          <div
            className={styles.color}
            onClick={() => setColor("#83c5be")}
          ></div>
          <div
            className={styles.color}
            onClick={() => setColor("#a3b18a")}
          ></div>
        </div>
        <button className={styles.add}>ADD</button>
      </div>
    </form>
  );
};

export default NotesForm;
