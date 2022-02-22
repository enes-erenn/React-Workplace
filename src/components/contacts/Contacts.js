import { useState } from "react";
import List from "./List/ContactList";
import Form from "./Form/ContactForm";
import styles from "./contacts.module.css";
import Button from "../Button/Button.js";

export default function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullName: "John Doe",
      phoneNumber: "123 456 78 90",
    },
    {
      fullName: "Oliver Ramos",
      phoneNumber: "123 456 78 90",
    },
    {
      fullName: "Violet Castro",
      phoneNumber: "222",
    },
    {
      fullName: "Ava Calva",
      phoneNumber: "444",
    },
    {
      fullName: "Finn Torres",
      phoneNumber: "555",
    },
  ]);

  return (
    <div id={styles.contacts}>
      <div id={styles.container}>
        <Form addContact={setContacts} contacts={contacts} />
        <List contacts={contacts} />
      </div>
      <Button />
    </div>
  );
}
