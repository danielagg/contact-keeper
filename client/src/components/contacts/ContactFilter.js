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
    <form>
      <input
        ref={filterText}
        type="text"
        placeholder="Filter contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
