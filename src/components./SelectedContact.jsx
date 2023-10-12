import React, { useEffect, useState } from "react";

export default function SelectedContact({ contactId, setSelectedContactId }) {
  const [contactDetails, setContactDetails] = useState(null);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`
        );
        const result = await response.json();
        setContactDetails(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContactDetails();
  }, [contactId]);

  const handleGoBack = () => {
    setSelectedContactId(null);
  };

  return (
    <div>
      <h2>Contact Details</h2>
      {contactDetails ? (
        <>
          <p>Name: {contactDetails.name}</p>
          <p>Email: {contactDetails.email}</p>
          <p>Phone: {contactDetails.phone}</p>
        </>
      ) : (
        <p>Loading contact details... be patient!</p>
      )}
      <button onClick={handleGoBack}>GO BACK TO CONTACT LIST</button>
    </div>
  );
}