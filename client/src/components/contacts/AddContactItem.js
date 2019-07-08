import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const AddContactItem = () => {
  const context = useContext(ContactContext);

  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    type: "personal"
  });

  const { name, email, phone, type } = newContact;

  const onChange = e => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    context.addContact(newContact);
    setNewContact({ name: "", phone: "", email: "", type: "personal" });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>Add Contact</h2>
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
        <input type="submit" value="Add Contact" />
      </div>
    </form>
  );
};

export default AddContactItem;
