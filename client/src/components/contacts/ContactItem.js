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
    <div className="col s12 m6 l4">
      <div className="card teal darken-2">
        <div className="card-content white-text">
          <span className="card-title">{name}</span>
          <span
            className={`new badge ${
              type === "professional" ? "red lighten-2" : "teal darken-5"
            }`}
            data-badge-caption=""
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
          <ul>
            <li>
              <i className="fas fa-envelope-open" /> {email}
            </li>
            <li>
              <i className="fas fa-phone" />
              {phone}
            </li>
          </ul>
        </div>
        <div className="card-action">
          <button className="btn white teal-text" onClick={onEdit}>
            <i className="material-icons right">edit</i>Edit
          </button>
          <button
            className="btn red lighten-2 whote-text"
            onClick={onDelete}
            style={{ marginLeft: "0.5rem" }}
          >
            <i className="material-icons right">delete</i>Delete
          </button>
        </div>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
