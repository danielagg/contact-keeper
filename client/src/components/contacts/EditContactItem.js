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
    <div style={{ marginBottom: "3rem" }}>
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

        <div className="row">
          <div className="col s6">
            <h5>Contact type</h5>
            <p>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="personal"
                  checked={type === "personal"}
                  onChange={onChange}
                />
                <span>Personal</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="professional"
                  checked={type === "professional"}
                  onChange={onChange}
                />
                <span>Professional</span>
              </label>
            </p>
          </div>
          <div className="col s6">
            {currentContact !== null ? (
              <div>
                <button
                  onClick={onClear}
                  className="btn-large grey lighten-2 black-text right"
                  style={{ margin: "2rem 0 0 0.5rem" }}
                >
                  Clear
                </button>

                <input
                  type="submit"
                  className="btn-large teal darken-2 white-text right"
                  value="Update Contact"
                  style={{ margin: "2rem 0 0 0" }}
                />
              </div>
            ) : (
              <div>
                <input
                  type="submit"
                  className="btn-large teal darken-2 white-text right"
                  style={{ marginTop: "2rem" }}
                  value="Add Contact"
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditContactItem;
