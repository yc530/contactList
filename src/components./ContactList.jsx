//Create a component, and name it ContactList


//Create a state variable to store the ID of a selected contact.
//create a componet that selects a specific contact 
//make a state that stores, the contact data 
//use effect to fetch contact data
//using use effect will fetch the slected contact using the contact id 
//
import React, {useState} from "react"; 
import ContactRow from "./ContactRow";
import {useEffect} from 'react';

export default function ContactList() { 
    const dummyContacts = [
        { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
        { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
        { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
       ];
       const [contacts, setContacts] = useState(dummyContacts)
    console.log("Contacts",contacts)

    
    useEffect(()=>{
        async function fetchContacts() {
            try {
              const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
            const result = await response.json()
       setContacts(result)
       console.log("contacts", result)
        } catch (error) {
              console.error(error);
            }
          }
          fetchContacts()
        }, []);
       
  return ( 
    <> 
    
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
        contacts.map((contact) => {
            return <ContactRow key={contact.id} contact={contact} />;
          })}

          </tbody>
        </table>
   </>
   ); 
}