import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

// Components
import ContactItem from "./ContactItem";

const ContactList = () => {
  const context = useContext(ContactContext);

  const { contacts } = context;

  return (
    <>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default ContactList;
