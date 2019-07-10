import React, { useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

// Components
import ContactItem from "./ContactItem";

const ContactList = () => {
  const context = useContext(ContactContext);

  const { getContacts, contacts, filteredContacts } = context;

  useEffect(() => {
    getContacts();
  }, []);

  const contactsToDisplay = [];

  if (filteredContacts !== null && filteredContacts.length > 0) {
    filteredContacts.map(contact => contactsToDisplay.push(contact));
  } else if (contacts !== null && contacts.length > 0) {
    contacts.map(contact => contactsToDisplay.push(contact));
  }

  return (
    <div className="row">
      {contactsToDisplay.map(contact => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
