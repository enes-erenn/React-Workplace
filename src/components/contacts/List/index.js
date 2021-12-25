import { useState } from 'react';

function List({contacts}) {
    const [filterText, setFilterText] = useState("");
    let contactList = [contacts[0], contacts[1], contacts[2]];
    
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
        <div id="list-container">
            <h4 id="heading-filter">Search</h4>
            <ul>
                <div>
                    <input id="filter" placeholder="Search for a Contact" value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
                </div>
                {   
                   list.map((contact, i) => (
                        <li key={i}>
                            <span>{contact.fullName}</span>
                            <span>{contact.phoneNumber}</span>
                        </li>
                    ) )
                }
            </ul>
            <p id="total">Total Contacts ({filtered.length})</p>
        </div>
    )
};

export default List;