import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const EditContactItem = () => {
  const context = useContext(ContactContext);
  const {
    addContact,
    updateContact,
    clearCurrentContact,
    currentContact
  } = context;

  useEffect(() => {
    if (currentContact !== null) {
      setContactInEdit(currentContact);
    } else {
      resetLocalStateToEmptyContact();
    }
  }, [currentContact]);

  const [contactInEdit, setContactInEdit] = useState({
    name: "",
    phone: "",
    email: "",
    type: "personal"
  });

  const { name, email, phone, type } = contactInEdit;

  const onChange = e => {
    setContactInEdit({ ...contactInEdit, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (currentContact === null) {
      addContact(contactInEdit);
    } else {
      updateContact(contactInEdit);
    }

    resetLocalStateToEmptyContact();
  };

  const onClear = () => {
    clearCurrentContact();
  };

  const resetLocalStateToEmptyContact = () => {
    setContactInEdit({ name: "", phone: "", email: "", type: "personal" });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{currentContact !== null ? "Edit" : "Add"} Contact</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone number"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />
      Personal
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />
      Professional
      <div>
        <input
          type="submit"
          value={(currentContact !== null ? "Update" : "Add") + " Contact"}
        />
      </div>
      {currentContact && (
        <div>
          <button onClick={onClear}>Clear</button>
        </div>
      )}
    </form>
  );
};

export default EditContactItem;
