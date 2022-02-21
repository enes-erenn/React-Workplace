import React from "react";
import { useSelector } from "react-redux";

const NotesList = () => {
  const items = useSelector((state) => state.notes.items);
  return (
    <div>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.note}</p>
        </li>
      ))}
    </div>
  );
};

export default NotesList;
