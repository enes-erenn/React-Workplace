import { useState } from 'react';
import List from "./List";
import Form from "./Form";
import "./style.css";

export default function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullName: "Enes",
            phoneNumber: "123"
        },
        {
            fullName: "Ahmet",
            phoneNumber: "321"
        },
        {
            fullName: "Mehmet",
            phoneNumber: "222"
        },
        {
            fullName: "Canan",
            phoneNumber: "444"
        },
        {
            fullName: "Berfin",
            phoneNumber: "555"
        }
    ])

    return (
        <div id="contacts">
            <div id="container">
                <Form addContact={setContacts} contacts={contacts} />
                <List contacts={contacts}/>
            </div>
        </div>
        
    )
};
