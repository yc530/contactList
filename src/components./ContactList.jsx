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

export default function ContactList({setSelectedContactId}) { 
       const [contacts, setContacts] = useState([])
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
            return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />;
          })}

          </tbody>
        </table>
   </>
   ); 
}