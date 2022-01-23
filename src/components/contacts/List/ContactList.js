import { useState } from "react";
import styles from "../contacts.module.css";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  let contactList = [...contacts];

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  let list = filtered.length < 4 ? filtered : contactList;

  return (
    <div id={styles.listContainer}>
      <input
        id={styles.filter}
        placeholder="Search for a Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul id={styles.list}>
        {list.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullName}</span>
            <span hidden>{contact.phoneNumber}</span>
          </li>
        ))}
      </ul>
      <p id={styles.total}>Total Contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
