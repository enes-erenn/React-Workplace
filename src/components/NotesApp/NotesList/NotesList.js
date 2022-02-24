// Packages and Dependencies
import { useState } from "react";
import { useSelector } from "react-redux";
// Styles
import styles from "./NotesList.module.css";

const NotesList = () => {
  const [filter, setFilter] = useState("");
  const items = useSelector((state) => state.notes.items);
  const filtered = useSelector((state) =>
    items.filter((item) =>
      item.note.toLowerCase().includes(filter.toLowerCase())
    )
  );
  return (
    <div className={styles.listContainer}>
      <input
        type="text"
        className={styles.filter}
        placeholder="Search for notes"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul className={styles.list}>
        {filtered.map((item) => (
          <li
            key={item.id}
            className={styles.note}
            style={{ backgroundColor: `${item.color}` }}
          >
            <p>{item.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
