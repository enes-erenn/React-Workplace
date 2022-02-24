// Packages and Dependencies
import { useState, useEffect } from "react";
// Styles
import styles from "../contacts.module.css";

const initialFormValues = { fullName: "", phoneNumber: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <div id={styles.formContainer}>
      <h4 id={styles.headingForm}>Add a Contact</h4>
      <form onSubmit={onSubmit}>
        <div>
          <input
            className={styles.inputAdd}
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={onChangeInput}
            value={form.fullName}
            required
          ></input>
        </div>

        <div>
          <input
            className={styles.inputAdd}
            name="phoneNumber"
            type="number"
            placeholder="Phone Number"
            onChange={onChangeInput}
            value={form.phoneNumber}
            required
          ></input>
        </div>

        <div>
          <button id={styles.inputBtn}>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
