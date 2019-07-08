import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const context = useContext(ContactContext);
  const { id, name, email, phone, type } = contact;

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
        <button>Edit</button>
      </p>
      <p>
        <button>Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
