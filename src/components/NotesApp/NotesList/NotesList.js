import React from "react";
import { useSelector } from "react-redux";
import styles from "./NotesList.module.css";

const NotesList = () => {
  const items = useSelector((state) => state.notes.items);
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li
          key={item.id}
          className={styles.note}
          style={{ backgroundColor: `${item.color}` }}
        >
          <p>{item.note}</p>
        </li>
      ))}
    </ul>
  );
};

export default NotesList;
