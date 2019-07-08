import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const context = useContext(ContactContext);
  const { deleteContact, setCurrentContact, clearCurrentContact } = context;
  const { _id, name, email, phone, type } = contact;

  const onEdit = () => {
    setCurrentContact(contact);
  };

  const onDelete = () => {
    clearCurrentContact();
    deleteContact(_id);
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      <ul>
        <li>
          <i className="fas fa-envelope-open" /> {email}
        </li>
        <li>
          <i className="fas fa-phone" />
          {phone}
        </li>
      </ul>
      <p>
        <button onClick={onEdit}>Edit</button>
      </p>
      <p>
        <button onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
