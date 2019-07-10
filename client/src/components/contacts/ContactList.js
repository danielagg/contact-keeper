import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

// Components
import ContactItem from "./ContactItem";

const ContactList = () => {
  const context = useContext(ContactContext);

  const { contacts, filteredContacts } = context;

  return (
    <>
      {filteredContacts !== null
        ? filteredContacts.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
    </>
  );
};

export default ContactList;
