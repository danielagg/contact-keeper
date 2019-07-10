import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const context = useContext(ContactContext);
  const { filteredContacts, filterContacts, clearContactFilters } = context;

  const filterText = useRef("");

  useEffect(() => {
    if (filteredContacts === null) {
      filterText.current.value = "";
    }
  }, [filteredContacts]);

  const onChange = e => {
    if (filterText.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearContactFilters();
    }
  };

  return (
    <div
      style={{ margin: "5rem 3rem 2rem 3rem", border: "1px solid grey" }}
      className="nav-wrapper white"
    >
      <form>
        <div className="input-field">
          <input
            ref={filterText}
            id="search"
            type="search"
            placeholder="Filter contacts..."
            onChange={onChange}
          />
          <label className="label-icon" htmlFor="search">
            <i className="material-icons black-text">search</i>
          </label>
        </div>
      </form>
    </div>
  );
};

export default ContactFilter;
