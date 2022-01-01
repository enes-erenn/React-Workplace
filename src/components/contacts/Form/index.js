import { useState, useEffect } from "react";

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
    <div id="form-container">
      <h4 id="heading-form">Contacts</h4>
      <form onSubmit={onSubmit}>
        <div>
          <input
            className="input-add"
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={onChangeInput}
            value={form.fullName}
          ></input>
        </div>

        <div>
          <input
            className="input-add"
            name="phoneNumber"
            type="number"
            placeholder="Phone Number"
            onChange={onChangeInput}
            value={form.phoneNumber}
          ></input>
        </div>

        <div>
          <button id="input-btn">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
