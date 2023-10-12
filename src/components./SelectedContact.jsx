import React, {useEffect, useState} from “react”

export default function SelectedContact({contactId, setSelectedContactId}) {
    const [contactDetails, setContactDetails ] = useState(null)
} 
useEffect (()=>{
    const fetchContactDetails = async()=> {
        try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`)
  const result = await response.json()      
setContactDetails(result)
} catch(error) {
    console.error(error)
}
    } 
fetchContactDetails()
},[contactId])